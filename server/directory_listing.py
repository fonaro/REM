"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import os

def filter_folders(dirs):
    for d in dirs:
        if d.startswith("."):
            continue
        yield d

def filter_files(files):
    for f in files:
        if f.endswith(".db"):
            continue
        if f.startswith("."):
            continue
        yield f


def get_subtree(path):
    """ Generates file/folder subtrees for the file walker """
    _, dirs, files = next(os.walk(path))

    for d in filter_folders(dirs):
        yield {'text': d,
               'children': True if os.listdir(os.path.join(path, d)) else False,
               'id': os.path.join(path, d),
               'icon': 'glyphicon glyphicon-folder-open',
               'type': 'default',
               'state': {'opened': False},
               }

    for f in filter_files(files):
        yield {
            'text': f,
            'children': False,
            'icon': 'glyphicon glyphicon-file',
            'id': os.path.join(path, f),
            'type': 'file',
        }

if __name__ == '__main__':            
    print list(get_subtree("."))