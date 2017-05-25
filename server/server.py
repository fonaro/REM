"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>

This is the main app, it takes no parameters (Use config.py).
For the web-app API specification, see the communication API no the Wiki.
"""

import os
import json
import logging

from flask import Flask, request, session, redirect,  abort, Response
from flask.helpers import send_from_directory

from config import config
import internals_db
import traceback

from data_source import DataSource
import directory_listing

from plugin_manager import PluginManager

app = Flask(__name__)

app.config.from_object(__name__)
app.config.update(config) # apply config file settings
data_root_dir = app.config.get('data_root_dir', os.path.dirname(os.path.abspath(__file__)))

# Init logger for the entire system
out_hdlr = logging.StreamHandler()
fmt = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
out_hdlr.setFormatter(fmt)
main_logger = logging.getLogger()
main_logger.addHandler(out_hdlr)
main_logger.setLevel(logging.DEBUG if config.get('debug', False) else logging.WARNING)
app.logger.handlers = []
app.logger.propagate = True

plugins = PluginManager(config["plugins_path"])
internals = internals_db.InternalsDB(config["internals_db_path"])


@app.errorhandler(Exception)
def handle_invalid_usage(error):
    """ Handles exception of all the handlers """
    app.logger.exception(error)

    if isinstance(error, SyntaxError):
        message = "Malformed data file: " + str(error)
    else:
        message = str(error)

    return Response(json.dumps({
        "message": message.strip(),
        "traceback": traceback.format_exc().strip(),
    }), 500, mimetype='application/json')


@app.route('/',methods=['GET'])
def main_page():
    return send_from_directory('static', 'index.html')


@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)


########################################################################
# Directory Listing
########################################################################


@app.route('/listdir',methods=['POST'])
def list_dir():
    """ Generates subtrees for the file browser """
    requested_path = request.get_json(force=True)
    app.logger.debug("Requested path list: %s", requested_path)

    if not requested_path:
        requested_path = data_root_dir

    res = directory_listing.get_subtree(requested_path)
    return Response(json.dumps({
        'json': list(res),
        'url': requested_path,
    }), mimetype='application/json')


########################################################################
# Data Fetching and Plotting
########################################################################

@app.route('/data/getcolumns',methods=['POST'])
def data_get_columns():
    """
    Initialized the experiment data object and parses the experiment file if required.
    Returns the column names in the experiment and the graph plugins.
    """
    requested_path = request.get_json(force=True)
    app.logger.debug("Requested path: %s", requested_path)

    data = DataSource(requested_path, config['export_folder'])

    res = data.column_names
    if not res:
        raise Exception("No data in file.")

    return Response(json.dumps(res), mimetype='application/json')


@app.route('/data/getvals',methods=['POST'])
def data_get_distinct_values():
    """ Returns all the distinct values of a data column """
    request_data = request.get_json(force=True)
    data_file = request_data['data_file']
    parameters = request_data['parameters']

    data = DataSource(data_file, config['export_folder'])
    ret = data.get_distinct_values(parameters)
    return Response(json.dumps(ret), mimetype='application/json')


@app.route('/data/plot',methods=['POST'])
def data_plot():
    """ Plot a data file """
    request_data = request.get_json(force=True)
    data_file = request_data['data_file']
    graph_type = request_data['graph_type']
    parameters = request_data['parameters']

    data = DataSource(data_file, config['export_folder'])
    if not data.column_names:
        raise Exception("No data in file.")

    js, div = plugins[graph_type].plot(data, **parameters)
    return Response(json.dumps({'div':div, 'js':js}),
                    mimetype='application/json')


########################################################################
# Plugins
########################################################################


@app.route('/plugin/list',methods=['GET', 'POST'])
def plugin_list():
    """ Returns the plugin list (possibly reload them) """
    request_data = request.get_json(force=True)
    try:
        if str(request_data).lower() == "reload":
            app.logger.info("Reloading plugins")
            plugins.reload_plugins()
    except:
        pass

    ret = plugins.plugins_images()
    return Response(json.dumps(ret), mimetype='application/json')


@app.route('/plugin/parameters',methods=['POST'])
def plugin_parameters():
    request_data = request.get_json(force=True)
    ret = plugins.get_plugin_parameters(request_data)
    return Response(json.dumps(ret), mimetype='application/json')


########################################################################
# Preset Handling
########################################################################


@app.route('/preset/load',methods=['POST'])
def preset_load():
    """
    Returns presets that can be applied to a specific data file (if specified).
    """
    data_file = request.get_json(force=True)
    presets = internals.get_presets()

    if not data_file: # Empty message return all presets
        res = {p['name']: p['json'] for p in presets}
    else:
        data = DataSource(data_file, config['export_folder'])
        data_columns = set(data.column_names)
        res = {p['name']: p['json'] for p in presets if data_columns.issuperset(p['items'])}
    return Response(json.dumps(res), mimetype='application/json')

    
@app.route('/preset/save',methods=['POST'])
def preset_save():
    """ Save a preset by name """
    parameters = request.get_json(force=True)
    if type(parameters) != dict:
        raise Exception("Expecting a dict, got a "+type(parameters))

    name = parameters['name']
    preset = parameters['preset']
    graph_type = preset['graph_type']
    parameters = preset['parameters']

    items = set()
    plugin_parameters = plugins.get_plugin_parameters(graph_type)
    for key, param in parameters.items():
        item_desc = plugin_parameters[key]
        if item_desc.get('filterByValue', None):
            # Get only the column(s) name (not the values)
            param = param[0]

        if type(param) == list:
            for sub_item in param:
                items.add(sub_item)
        else:
            items.add(param)

    internals.save_preset(name, preset, items)

    return Response(json.dumps(['Preset saved.']), mimetype='application/json')


@app.route('/preset/delete',methods=['POST'])
def preset_delete():
    """ Delete a preset(s) by name """
    presets = request.get_json(force=True)
    if type(presets) != list or len(presets) == 0:
        raise Exception("Expecting a non-empty list.")

    internals.delete_presets(*presets)

    return Response(json.dumps(['Preset deleted.']), mimetype='application/json')


################################################################
# Main
################################################################
if __name__ == '__main__':
    app.run(app.config['hostname'], port=app.config['port'], threaded=True)