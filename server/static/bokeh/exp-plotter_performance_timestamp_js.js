Bokeh.$(function() {
    Bokeh.safely(function() {
        var docs_json = {"57a14a37-09a3-454f-9d26-7e851042a3f2":{"roots":{"references":[{"attributes":{"line_color":{"value":"blue"},"line_width":{"value":2},"x":{"field":"performance"},"y":{"field":"timestamp"}},"id":"13e03ce4-f027-4894-9442-14d5eddff390","type":"Line"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"2f1141a6-6dc5-4b5f-b795-1f3f1fc1c6fb","type":"SaveTool"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"b3c97083-b8b6-42f7-b51f-d31160cdd895","type":"CrosshairTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9d8b557f-3c87-4948-b81e-df8bb594bb0e","type":"BoxAnnotation"},{"attributes":{},"id":"280e7e68-3c84-428c-b1ee-7cf180a1f2c4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3eff7488-5f1a-4815-9426-e77dc4c68940","type":"ColumnDataSource"},"glyph":{"id":"13e03ce4-f027-4894-9442-14d5eddff390","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"19728596-4c99-44d4-a2d8-e979155e6991","type":"Line"},"selection_glyph":null},"id":"91cb4876-b2a3-4149-9f52-288099e897b5","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9d8b557f-3c87-4948-b81e-df8bb594bb0e","type":"BoxAnnotation"},"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"6c159010-07b2-4bae-bcaf-d990a1b6148f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"41dab2bd-0d14-4a33-a681-18f6cb8d98ad","type":"ResetTool"},{"attributes":{},"id":"112a5242-6bba-47e5-b8dc-70c288af8cce","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"performance"},"y":{"field":"timestamp"}},"id":"19728596-4c99-44d4-a2d8-e979155e6991","type":"Line"},{"attributes":{"callback":null,"column_names":["performance","index","name","timestamp"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227],"name":["vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1"],"performance":[153.62,153.62,154.43,154.43,156.29,156.29,156.35,156.35,157.91,157.91,158.46,158.46,159.04,159.04,159.85,159.85,159.97,159.97,160.51,160.51,161.05,161.05,161.06,161.06,161.2,161.2,161.59,161.59,162.99,162.99,163.44,163.44,164.14,164.14,164.27,164.27,174.48,174.48,183.62,183.62,186.22,186.22,189.97,189.97,190.1,190.1,190.19,190.19,190.36,190.36,190.43,190.43,190.63,190.63,190.85,190.85,190.86,190.86,190.86,190.86,190.97,190.97,191.03,191.03,191.18,191.18,191.24,191.24,191.32,191.32,191.38,191.38,191.55,191.55,191.55,191.55,191.59,191.59,191.96,191.96,192.09,192.09,192.25,192.25,192.45,192.45,192.54,192.54,192.55,192.55,192.63,192.63,192.99,192.99,193.02,193.02,193.35,193.35,193.4,193.4,193.98,193.98,194.48,194.48,195.16,195.16,195.42,195.42,195.81,195.81,196.12,196.12,196.18,196.18,197.12,197.12,197.54,197.54,197.54,197.54,197.67,197.67,197.75,197.75,197.9,197.9,198.06,198.06,198.4,198.4,198.67,198.67,199.16,199.16,200.14,200.14,200.2,200.2,200.3,200.3,200.79,200.79,200.93,200.93,201.05,201.05,201.44,201.44,201.57,201.57,201.61,201.61,201.78,201.78,201.85,201.85,201.96,201.96,202.11,202.11,202.18,202.18,202.8,202.8,202.99,202.99,203.89,203.89,207.58,207.58,208.39,208.39,208.46,208.46,305.09,305.09,305.51,305.51,307.09,307.09,308.82,308.82,309.62,309.62,310.1,310.1,310.12,310.12,310.35,310.35,310.39,310.39,310.44,310.44,310.44,310.44,310.53,310.53,310.54,310.54,310.58,310.58,310.65,310.65,310.83,310.83,311.26,311.26,311.55,311.55,311.84,311.84,312.35,312.35,312.4,312.4,312.43,312.43,312.55,312.55,312.66,312.66,313.16,313.16,314.22,314.22,314.88,314.88],"timestamp":[915.284916878,944.284916878,738.284916878,768.284916878,797.284916878,827.284916878,886.284916878,915.284916878,856.284916878,886.284916878,1987.28491688,2017.28491688,708.284916878,738.284916878,2046.28491688,2075.28491688,768.284916878,797.284916878,679.284916878,708.284916878,1870.28491688,1899.28491688,2017.28491688,2046.28491688,827.284916878,856.284916878,2075.28491688,2104.28491688,1929.28491688,1958.28491688,1841.28491688,1870.28491688,1899.28491688,1929.28491688,1958.28491688,1987.28491688,650.284916878,679.284916878,2104.28491688,2132.28491688,2132.28491688,2160.28491688,596.284916878,623.284916878,1216.28491688,1243.28491688,1135.28491688,1162.28491688,1786.28491688,1813.28491688,516.284916878,542.284916878,1460.28491688,1487.28491688,1406.28491688,1433.28491688,435.284916878,462.284916878,1433.28491688,1460.28491688,1271.28491688,1298.28491688,1080.28491688,1108.28491688,1487.28491688,1514.28491688,1595.28491688,1622.28491688,1731.28491688,1758.28491688,1325.28491688,1352.28491688,569.284916878,596.284916878,1676.28491688,1703.28491688,355.284916878,381.284916878,1108.28491688,1135.28491688,489.284916878,516.284916878,1568.28491688,1595.28491688,1026.28491688,1053.28491688,1379.28491688,1406.28491688,408.284916878,435.284916878,1352.28491688,1379.28491688,1243.28491688,1271.28491688,1541.28491688,1568.28491688,1298.28491688,1325.28491688,999.284916878,1026.28491688,1189.28491688,1216.28491688,944.284916878,971.284916878,1758.28491688,1786.28491688,1514.28491688,1541.28491688,1703.28491688,1731.28491688,971.284916878,999.284916878,2321.28491688,2348.28491688,2617.28491688,2644.28491688,1813.28491688,1841.28491688,2187.28491688,2214.28491688,2536.28491688,2563.28491688,1622.28491688,1649.28491688,2268.28491688,2295.28491688,2697.28491688,2724.28491688,2563.28491688,2590.28491688,2348.28491688,2375.28491688,1053.28491688,1080.28491688,2644.28491688,2671.28491688,2724.28491688,2749.28491688,1649.28491688,1676.28491688,381.284916878,408.284916878,542.284916878,569.284916878,1162.28491688,1189.28491688,2671.28491688,2697.28491688,2483.28491688,2510.28491688,2456.28491688,2483.28491688,2510.28491688,2536.28491688,462.284916878,489.284916878,623.284916878,650.284916878,2160.28491688,2187.28491688,2590.28491688,2617.28491688,2295.28491688,2321.28491688,2429.28491688,2456.28491688,2241.28491688,2268.28491688,2375.28491688,2402.28491688,2402.28491688,2429.28491688,2214.28491688,2241.28491688,119.284916878,149.284916878,64.2849168777,94.2849168777,238.284916878,268.284916878,149.284916878,179.284916878,2970.28491688,2996.28491688,3073.28491688,3099.28491688,297.284916878,327.284916878,268.284916878,297.284916878,2800.28491688,2826.28491688,327.284916878,355.284916878,2852.28491688,2882.28491688,2826.28491688,2852.28491688,3128.28491688,3154.28491688,2911.28491688,2941.28491688,38.2849168777,64.2849168777,94.2849168777,119.284916878,2775.28491688,2800.28491688,2882.28491688,2911.28491688,2941.28491688,2970.28491688,3154.28491688,3180.28491688,179.284916878,208.284916878,208.284916878,238.284916878,3022.28491688,3047.28491688,2749.28491688,2775.28491688,3047.28491688,3073.28491688,2996.28491688,3022.28491688,3099.28491688,3128.28491688]}},"id":"3eff7488-5f1a-4815-9426-e77dc4c68940","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"e55b32b0-3878-4089-8029-6e1a5341f543","type":"BasicTicker"}},"id":"91d80196-19f2-4868-a381-576f31c0d66b","type":"Grid"},{"attributes":{},"id":"01ad6e1d-e5af-4226-a8ed-7db77e075817","type":"ToolEvents"},{"attributes":{"callback":null,"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"c181b7ef-8254-40b3-ae47-4c829cbdfda8","type":"HoverTool"},{"attributes":{"axis_label":"timestamp","formatter":{"id":"280e7e68-3c84-428c-b1ee-7cf180a1f2c4","type":"BasicTickFormatter"},"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b213295-c8de-4d9a-9357-36d7fb79373b","type":"BasicTicker"}},"id":"2a473d55-8429-4ef8-9b56-92e5cb021c95","type":"LinearAxis"},{"attributes":{"callback":null},"id":"65d95bf2-0137-4653-a0f1-3c60e88c5153","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b213295-c8de-4d9a-9357-36d7fb79373b","type":"BasicTicker"}},"id":"44d7854e-c6b0-45e6-9c0c-64794277e0a6","type":"Grid"},{"attributes":{"below":[{"id":"09b8147f-51fd-48e5-90d6-6121cad4f8b8","type":"LinearAxis"}],"left":[{"id":"2a473d55-8429-4ef8-9b56-92e5cb021c95","type":"LinearAxis"}],"renderers":[{"id":"09b8147f-51fd-48e5-90d6-6121cad4f8b8","type":"LinearAxis"},{"id":"91d80196-19f2-4868-a381-576f31c0d66b","type":"Grid"},{"id":"2a473d55-8429-4ef8-9b56-92e5cb021c95","type":"LinearAxis"},{"id":"44d7854e-c6b0-45e6-9c0c-64794277e0a6","type":"Grid"},{"id":"9d8b557f-3c87-4948-b81e-df8bb594bb0e","type":"BoxAnnotation"},{"id":"749ed81d-6574-4dff-b004-41500285b53f","type":"Legend"},{"id":"91cb4876-b2a3-4149-9f52-288099e897b5","type":"GlyphRenderer"}],"sizing_mode":"stretch_both","title":{"id":"993bb606-df74-41a9-95c9-e5c9e3eeac45","type":"Title"},"tool_events":{"id":"01ad6e1d-e5af-4226-a8ed-7db77e075817","type":"ToolEvents"},"toolbar":{"id":"d704a24e-b69b-44e6-9bfd-b19df52326f4","type":"Toolbar"},"x_range":{"id":"65d95bf2-0137-4653-a0f1-3c60e88c5153","type":"DataRange1d"},"y_range":{"id":"023bd8a6-5d3c-4c34-9465-45dc379bce21","type":"DataRange1d"}},"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4b213295-c8de-4d9a-9357-36d7fb79373b","type":"BasicTicker"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"4543f99d-36b2-4dd7-aea8-a8a4b363f481","type":"WheelZoomTool"},{"attributes":{"axis_label":"performance","formatter":{"id":"112a5242-6bba-47e5-b8dc-70c288af8cce","type":"BasicTickFormatter"},"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"e55b32b0-3878-4089-8029-6e1a5341f543","type":"BasicTicker"}},"id":"09b8147f-51fd-48e5-90d6-6121cad4f8b8","type":"LinearAxis"},{"attributes":{"plot":null,"text":"line"},"id":"993bb606-df74-41a9-95c9-e5c9e3eeac45","type":"Title"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"b11294ad-b1f5-475f-b2d7-b4049dcd459d","type":"PanTool"},{"attributes":{},"id":"e55b32b0-3878-4089-8029-6e1a5341f543","type":"BasicTicker"},{"attributes":{"callback":null},"id":"023bd8a6-5d3c-4c34-9465-45dc379bce21","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c181b7ef-8254-40b3-ae47-4c829cbdfda8","type":"HoverTool"},{"id":"b3c97083-b8b6-42f7-b51f-d31160cdd895","type":"CrosshairTool"},{"id":"4543f99d-36b2-4dd7-aea8-a8a4b363f481","type":"WheelZoomTool"},{"id":"6c159010-07b2-4bae-bcaf-d990a1b6148f","type":"BoxZoomTool"},{"id":"b11294ad-b1f5-475f-b2d7-b4049dcd459d","type":"PanTool"},{"id":"2f1141a6-6dc5-4b5f-b795-1f3f1fc1c6fb","type":"SaveTool"},{"id":"2408295c-1931-4583-8934-800330088012","type":"ResizeTool"},{"id":"41dab2bd-0d14-4a33-a681-18f6cb8d98ad","type":"ResetTool"}]},"id":"d704a24e-b69b-44e6-9bfd-b19df52326f4","type":"Toolbar"},{"attributes":{"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"2408295c-1931-4583-8934-800330088012","type":"ResizeTool"},{"attributes":{"legends":[["vm-1",[{"id":"91cb4876-b2a3-4149-9f52-288099e897b5","type":"GlyphRenderer"}]]],"plot":{"id":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad","subtype":"Figure","type":"Plot"}},"id":"749ed81d-6574-4dff-b004-41500285b53f","type":"Legend"}],"root_ids":["36fb113c-b579-45a2-acd3-4d4a5dfc91ad"]},"title":"Bokeh Application","version":"0.12.2"}};
        var render_items = [{"docid":"57a14a37-09a3-454f-9d26-7e851042a3f2","elementid":"1555c6db-da5c-42f7-aa36-7587b75d1bcb","modelid":"36fb113c-b579-45a2-acd3-4d4a5dfc91ad"}];
        
        Bokeh.embed.embed_items(docs_json, render_items);
    });
});