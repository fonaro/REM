"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import os

def filter_folders(dirs):
    """ Filter hidden folders """
    for d in dirs:
        if d.startswith("."):
            continue
        yield d


def filter_files(files):
    """ Filter hidden files and DB files """
    for f in files:
        if f.endswith(".db"):
            continue
        if f.startswith("."):
            continue
        yield f


def get_subtree(path):
    """ Generates file/folder subtrees for the file walker """
    _, dirs, files = next(os.walk(path))
    yield {
        'text': "..",
        'children': False,
        'id': os.path.split(path)[0],
        'type': 'a-up-dir',
    }

    for d in filter_folders(dirs):
        yield {'text': d,
               'children': True if os.listdir(os.path.join(path, d)) else False,
               'id': os.path.join(path, d),
               'type': 'b-folder',
               }

    for f in filter_files(files):
        yield {
            'text': f,
            'children': False,
            'id': os.path.join(path, f),
            'type': 'c-file',
        }

if __name__ == '__main__':            
    print list(get_subtree("."))