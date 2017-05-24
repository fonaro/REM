"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import pandas as pd
from bokeh import plotting
from bokeh.embed import components
from bokeh.io import save
from bokeh.palettes import Set1_9
from collections import OrderedDict

def description():
    return "Line Plot"


def parameters():
    params = OrderedDict()
    params['x_axis'] = {'label': 'X axis', 'type': 'single',
                        'default': 'timestamp', 'required': True}
    params['y_axis'] = {'label': 'Y axis', 'type': 'single',
                        'required': True}
    params['group_by'] = {'label': "Group By", 'type': 'single',
                          'required': True, 'filterByValue': {
        'type': 'multiple',
        'required': False
    }}
    return params


def image_path():
    return "img/pluginImg/Line.png"


def plot(data, x_axis, y_axis, group_by):
    group_by, values = group_by
    if type(values) != list:
        values = [values]
    if not values:
        # If no value is selected, use all.
        values = data.get_distinct_values(group_by)

    # figure_name = 'line'
    colors = list(Set1_9)
    parameters = []
    for i, val in enumerate(values):
        parameters.append({'col':group_by, 'value':val,
                           'x':x_axis, 'y':y_axis,
                           'color':colors[i%9]}) # , 'color':'red'

    fig = plotting.figure(sizing_mode='stretch_both', #title=figure_name,
                          x_axis_label=x_axis ,y_axis_label=y_axis ,
                          tools=['hover','crosshair','wheel_zoom','box_zoom','pan',
                                 'save','resize','reset'])

    with data.db_connection() as conn:
        dump = pd.DataFrame()
        for params in parameters:
            # Take only rows that contain these columns
            frame_slice = pd.read_sql_query(
                "select `{x}`,`{y}`,`{col}` from data where `{x}` != '' and `{y}` != '' and `{col}` = '{value}' order by `{x}` asc".format(**params),
                conn)
            dump = dump.append(frame_slice)
            fig.line(source=plotting.ColumnDataSource(frame_slice),
                     x=params['x'],y=params['y'], line_width=2, legend=params['col'],
                     color=params['color'])

    json_file_path = data.export_file_path("json", "line", x_axis, y_axis)
    dump = dump.reset_index(drop=True)
    dump.to_json(json_file_path)
    del(dump)

    html_file_path = data.export_file_path("html", "line", x_axis, y_axis)
    plotting.output_file(html_file_path, title=data.name,
                         mode='inline', root_dir=None)
    save(fig)
    js, div = components(fig, wrap_script=False, wrap_plot_info=True)
    return js, div