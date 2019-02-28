"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import os
import pandas as pd
from bokeh import plotting
from bokeh.embed import components
from bokeh.io import save
from bokeh.palettes import Set1_9
from collections import OrderedDict


__COLORS__ = list(Set1_9)


def description():
    return "Line Plot"


def parameters():
    params = OrderedDict()
    params['x_axis'] = {'label': 'X axis', 'type': 'single',
                        'default': 'timestamp', 'required': True}
    params['y_axis'] = {'label': 'Y axis', 'type': 'single',
                        'required': True}
    params['group_by'] = {'label': "Group By", 'type': 'single',
                          'required': True, 'filter': {
        'type': 'multiple',
        'required': False
    }}
    return params


def image_path():
    return "img/pluginImg/Line.png"


def fetch_data(data, x_axis, y_axis, group_by):
    group_by, filter_values = group_by
    if type(filter_values) != list:
        filter_values = [filter_values]

    hdf_file_path = data.export_file_path("h5", "line", x_axis, y_axis)
    try:
        os.remove(hdf_file_path)
    except:
        pass
    store = pd.HDFStore(hdf_file_path)

    try:
        with data.db_connection() as conn:
            frame_slice = pd.read_sql_query(
                "select `{x}`,`{y}`,`{g}` from data "
                "where `{x}` != '' and `{y}` != '' "
                "order by `{x}` asc".format(x=x_axis, y=y_axis, g=group_by), conn)


            for group, frame_slice in frame_slice.groupby(group_by):
                if filter_values and group not in filter_values:
                    continue
                del frame_slice[group_by]
                store.put(str(group), frame_slice, append=False)
    except:
        store.close()
        try:
            os.remove(hdf_file_path)
        except:
            pass
        return
    else:
        return store


def plot(data, x_axis, y_axis, group_by):
    fig = plotting.figure(sizing_mode='stretch_both',  # title=figure_name,
                          x_axis_label=x_axis, y_axis_label=y_axis,
                          tools=['hover', 'crosshair', 'wheel_zoom', 'box_zoom', 'pan',
                                 'save', 'resize', 'reset'])

    with fetch_data(data, x_axis, y_axis, group_by) as store_data:
        for i, group in enumerate(store_data):
            color = __COLORS__[i % len(__COLORS__)]
            data_source = plotting.ColumnDataSource(store_data[group])
            group_key = group[1:] # Remove leading "/"
            fig.line(source=data_source,
                     x=x_axis, y=y_axis, line_width=2,
                     legend=group_key, color=color, muted_alpha=0.2)

    fig.legend.click_policy = "hide"

    html_file_path = data.export_file_path("html", "line", x_axis, y_axis)
    plotting.output_file(html_file_path, title=data.name,
                         mode='inline', root_dir=None)
    save(fig)
    js, div = components(fig, wrap_script=False, wrap_plot_info=True)
    return js, div