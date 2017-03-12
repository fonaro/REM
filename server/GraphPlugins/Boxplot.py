# -*- coding: utf-8 -*-


import pandas as pd
import numpy as np
import sqlite3
#from ast import literal_eval
#from collections import MutableMapping
from bokeh import plotting
#figure, output_file, show, ColumnDataSource
from bokeh.embed import components
from bokeh.io import save
from os.path import join
#from json import dumps
from bokeh.palettes import Set1_9 
from collections import OrderedDict

class Boxplot(object):
    def getparameters(self):
        #return {'Line': {'x-axis':'single', 'y-axis':'single', 'group-by':'multiple'}}
        params = OrderedDict()
        params['x_axis'] = {'type':'single','source':'cols'}
        params['y_axis'] = {'type':'single','source':'cols'}
        params['group_by'] ={'type':'multiple','source':'name'}
        return {'Boxplot':params}
        
    def plot(self, filename, sqlpath, x_axis, y_axis, group_by):
        cats = list("abcdef")
        yy = np.random.randn(2000)
        g = np.random.choice(cats, 2000)
        for i, l in enumerate(cats):
            yy[g == l] += i // 2
        df = pd.DataFrame(dict(score=yy, group=g))
        
        # find the quartiles and IQR for each category
        groups = df.groupby('group')
        q1 = groups.quantile(q=0.25)
        q2 = groups.quantile(q=0.5)
        q3 = groups.quantile(q=0.75)
        iqr = q3 - q1
        upper = q3 + 1.5*iqr
        lower = q1 - 1.5*iqr
        
        # find the outliers for each category
        def outliers(group):
            cat = group.name
            return group[(group.score > upper.loc[cat]['score']) | (group.score < lower.loc[cat]['score'])]['score']
        out = groups.apply(outliers).dropna()
        
        # prepare outlier data for plotting, we need coordinates for every outlier.
        if not out.empty:
            outx = []
            outy = []
            for cat in cats:
                # only add outliers if they exist
                if not out.loc[cat].empty:
                    for value in out[cat]:
                        outx.append(cat)
                        outy.append(value)
        
            p = plotting.figure(tools="save", background_fill_color="#EFE8E2", title="", x_range=cats)

# if no outliers, shrink lengths of stems to be no longer than the minimums or maximums
        qmin = groups.quantile(q=0.00)
        qmax = groups.quantile(q=1.00)
        upper.score = [min([x,y]) for (x,y) in zip(list(qmax.loc[:,'score']),upper.score)]
        lower.score = [max([x,y]) for (x,y) in zip(list(qmin.loc[:,'score']),lower.score)]
        
        # stems
        p.segment(cats, upper.score, cats, q3.score, line_color="black")
        p.segment(cats, lower.score, cats, q1.score, line_color="black")
        
        # boxes
        p.vbar(cats, 0.7, q2.score, q3.score, fill_color="#E08E79", line_color="black")
        p.vbar(cats, 0.7, q1.score, q2.score, fill_color="#3B8686", line_color="black")
        
        # whiskers (almost-0 height rects simpler than segments)
        p.rect(cats, lower.score, 0.2, 0.01, line_color="black")
        p.rect(cats, upper.score, 0.2, 0.01, line_color="black")
        
        # outliers
        if not out.empty:
            p.circle(outx, outy, size=6, color="#F38630", fill_alpha=0.6)
        
        p.xgrid.grid_line_color = None
        p.ygrid.grid_line_color = "white"
        p.grid.grid_line_width = 2
        p.xaxis.major_label_text_font_size="12pt"
        self.getparameters().keys()[0]
        name = '{}_{}_{}_{}'.format(filename,self.getparameters().keys()[0],x_axis,y_axis)
        name = name.replace(':','')
        plotting.output_file(join('static', name+'.html'), title=name, mode='cdn', root_dir=None)
        save(p)
        js,div =components(p, wrap_script = False, wrap_plot_info = True)
        div_path = join('bokeh','{}_div.html'.format(name))
        with open (join('static',div_path), 'w') as out:
            out.write(div)
        js_path = join('bokeh','{}_js.js'.format(name))
        with open (join('static', js_path), 'w') as out:
            out.write(js)
#        if __name__ == '__main__':
#            show(fig)
        return {'div':div, 'js':js_path}