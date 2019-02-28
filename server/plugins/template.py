"""
Guideline on how to create a graph plugin
"""
from collections import OrderedDict

# usually you will use one and only one of the following
# never import things directly from charts or plotting (e.g. from bokeh.chart import ...) as it causes collisions!
# from bokeh import charts

ignore_plugin = True # Will not show this plugin

def description():
    """ Should return the plugins description """
    return "Template Plugin"


def image_path():
    return "img/pluginImg/template.png" # This does not exist. Will use "defaultLogo.png"


def parameters():
    """
    this function is used by the web page to query the user for data
    the order of the items in the dict are the order you will see them in the web page, so use OrderedDict for consistency
    each data item is a dict containing 2 things: type - the type of input(i.e. single item from a list(single), multiple items from a list(multiple) etc..)
        and source - the source of input (i.e cols for the names of data columns or name for the values of the name column)
    the return value should be a dict with a single key, the class name, and the value should be the dict of parameters to query the user for
    """
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


def plot(data, **parameters):
    """
    The plot function will always receive the following inputs:
        data:         A DataSource object
        **parameters: The requested parameters - the same as they were in the parameters function
    the body of the functions should create a graph using either of the plotting interfaced (charts/plotting)
    :returns: tuple(js, div)
    """
    js = "fake javascript component"
    div = "fake html component"
    return js, div
        
    