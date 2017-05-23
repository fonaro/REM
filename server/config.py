"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
server config file
"""
import os

# data_dir is the initial directory to start the file browser in
# it will default to the server location.
server_dir = os.path.dirname(os.path.abspath(__file__))
example_data_dir = os.path.join(server_dir, '../example-data')
data_root_dir = os.environ.get('data_root_dir', example_data_dir)
data_root_dir = os.path.normpath(os.path.expanduser(data_root_dir))

config = dict(
    # REM server configuration
    data_root_dir = data_root_dir,
    plugins_path = os.path.join(server_dir, "plugins"),
    internals_db_path = os.path.join(server_dir, "internals.db"),
    export_folder = "exports",

    # Flask configuration
    port = 5000,
    debug = True,
    hostname = '0.0.0.0',
    #the SECRET_KEY is required, without it you cant have sessions.
    SECRET_KEY = 'this is my secret key, there are many like it, but this one is mine'
    )