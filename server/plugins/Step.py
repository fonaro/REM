"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import pandas as pd
import sqlite3
from bokeh.embed import components
from os.path import join as join_path
from collections import OrderedDict
from bokeh.io import save
from bokeh import charts

#Step, show, output_file, ColumnDataSource

ignore_plugin = True

def description():
    return "Step Plot"


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
    return "img/pluginImg/Step.png"

def plot(data, x_axis, y_axis, group_by):
    group_by, values = group_by
    if type(values) != list:
        values = [values]
    if not values:
        # If no value is selected, use all.
        values = data.get_distinct_values(group_by)

    parameters = {'group_by':group_by, 'x':x_axis, 'y':y_axis, 'val': value}
    with data.db_connection() as conn:
        #for params in parameters:
        #take only rows that contain these columns
        query = "select `{x}`,`{y}` from data where `{x}` != '' and `{y}` != '' and `{group_by}` = '{val}' order by `{x}` asc".format(**parameters)
        frame_slice = pd.read_sql_query(query, conn)

    fig = charts.Step(data=frame_slice, x='{}'.format(x_axis), y='{}'.format(y_axis))

    json_file_path = data.export_file_path("json", "line", x_axis, y_axis)
    dump = dump.reset_index(drop=True)
    dump.to_json(json_file_path)
    del (dump)

    name = '{}_{}_{}_{}'.format(filename,__name__,x_axis,y_axis)
    name = name.replace(':','')
    charts.output_file(join_path('static',name+'.html'), title=name, mode='cdn', root_dir=None)
    save(fig)
    js,div =components(fig, wrap_script = False, wrap_plot_info = True)
    return {'div':div, 'js':js}
        
    
    
    