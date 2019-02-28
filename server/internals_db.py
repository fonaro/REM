"""
@editor: Liran Funaro <funaro@cs.technion.ac.il>
@author: Alex Nulman <anulman@cs.haifa.ac.il>
"""
import sqlite3
import os
from contextlib import closing
import pandas as pd
import json

class InternalsDB:
    TABLE = '''CREATE TABLE IF NOT EXISTS "presets" (
                `items` TEXT,
                `json`  TEXT,
                `name`  TEXT,
                PRIMARY KEY(`name`)
                );'''

    def __init__(self, db_path):
        self.db_path = db_path

    def get_presets(self):
        self.validate()

        with self.__db_connection__() as conn:
            frame = pd.read_sql_query('select * from presets order by name', conn)
            ret = []
            for index, row in frame.iterrows():
                ret.append({
                    'name': row['name'],
                    'json': json.loads(row['json']),
                    'items': set(json.loads(row['items'])),
                })
            return ret

    def save_preset(self, name, preset, items):
        frame = pd.DataFrame([{
            'name': name,
            'json': json.dumps(preset),
            'items': json.dumps(list((items))),
        }])

        self.validate()

        with self.__db_connection__() as conn:
            conn.execute('delete from presets where name = ?', [name])
            conn.commit()
            frame.to_sql('presets', conn, index=False, if_exists='append')

    def delete_presets(self, *names):
        self.validate()

        with self.__db_connection__() as conn:
            for name in names:
                conn.execute('delete from presets where name = ?', [name])
            conn.commit()

    @property
    def is_exist(self):
        return os.path.exists(self.db_path)

    def validate(self):
        """
        Validates if the DB file exists
        and creates it, and its tables if it doesnt
        """
        if self.is_exist:
            return

        with self.__db_connection__() as conn:
            conn.execute(self.TABLE)

    def __db_connection__(self):
        return closing( sqlite3.connect(self.db_path) )