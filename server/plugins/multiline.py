"""
@author: Liran Funaro <funaro@cs.technion.ac.il>
"""
import pandas as pd
from bokeh import plotting
from bokeh.embed import components
from bokeh.io import save
from bokeh.palettes import Set1_9
from collections import OrderedDict
import bokeh.models
import bokeh.layouts
import bokeh.events
import re


__COLORS__ = list(Set1_9)


def description():
    return "Multiline Plot"


def parameters():
    params = OrderedDict()
    params['x_axis'] = {'label': 'X axis', 'type': 'single',
                        'default': 'timestamp', 'required': True}
    params['y_axis'] = {'label': 'Y axis', 'type': 'single',
                        'required': True}
    params['alt_axis'] = {'label': 'ALT axis', 'type': 'single',
                        'required': True}
    params['group_by'] = {'label': "Group By", 'type': 'single',
                          'required': True}
    return params


def image_path():
    return "img/pluginImg/Line.png"


def plot(data, x_axis, y_axis, alt_axis, group_by):
    fig = plotting.figure(sizing_mode='stretch_both', #title=figure_name,
                          x_axis_label=x_axis ,y_axis_label=y_axis ,
                          tools=['hover','crosshair','wheel_zoom','box_zoom','pan',
                                 'save','resize','reset'])

    dump = pd.DataFrame()
    lines = {}
    sources = {}
    with data.db_connection() as conn:
        df = pd.read_sql_query(
            "select `{x}`,`{y}`,`{alt}`,`{g}` from data "
            "where `{x}` != '' "
            "order by `{x}` asc".format(x=x_axis,y=y_axis,alt=alt_axis,g=group_by), conn)

        for i, (group, frame_slice) in enumerate(df.groupby(group_by)):
            if frame_slice[y_axis].isnull().all():
                continue
            frame_slice[y_axis].fillna(method='backfill', inplace=True)
            frame_slice[alt_axis].fillna(method='backfill', inplace=True)

            color = __COLORS__[i % len(__COLORS__)]
            data_source = plotting.ColumnDataSource(frame_slice)

            dump = dump.append(frame_slice)
            l = fig.line(source=data_source,
                     x=x_axis, y=y_axis, line_width=2, legend=group_by,
                     color=color, muted_alpha=0.2)

            lines[str(group)] = l
            sources[str(group)] = data_source

    fig.legend.click_policy = "hide"

    menu = [(y_axis, y_axis), (alt_axis, alt_axis)]
    args = {"fig": fig}
    for i,k in enumerate(lines):
        line_key = "line_%s" % i
        source_key = "source_%s" % i
        args[line_key] = lines[k]
        args[source_key] = sources[k]

    # // for (i in cb_obj.menu) {
    #         // eval("line_" + cb_obj.menu[i][1]).visible = false;
    # //}
    # // eval("line_" + cb_obj.value).visible = true;
    callback = bokeh.models.CustomJS(args=args, code="""
            fig.yaxis[0].axis_label = 'Height (in)';
            for(var i=0; i < %s; i++) {
                var line = eval("line_"+i);
                var source = eval("source_"+i);
                line.glyph.y.field = cb_obj.value;
                source.trigger("change");
            }
            """ % len(lines))

    show = bokeh.models.widgets.Dropdown(label="Show", button_type="success",
                                          menu=menu,
                                         callback=callback,
                                         sizing_mode='stretch_both')
    layout = bokeh.layouts.column(show, fig, sizing_mode='stretch_both')

    # json_file_path = data.export_file_path("json", "line", x_axis, y_axis)
    # dump = dump.reset_index(drop=True)
    # dump.to_json(json_file_path)
    # del(dump)
    #
    # html_file_path = data.export_file_path("html", "line", x_axis, y_axis)
    # plotting.output_file(html_file_path, title=data.name,
    #                      mode='inline', root_dir=None)
    # save(fig)
    js, div = components(layout, wrap_script=False, wrap_plot_info=True)
    return js, div