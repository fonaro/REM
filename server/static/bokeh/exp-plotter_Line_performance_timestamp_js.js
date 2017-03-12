(function() {
  var fn = function() {
    Bokeh.safely(function() {
      var docs_json = {"ea719502-39f8-4c9a-abed-9d1e35504687":{"roots":{"references":[{"attributes":{},"id":"7489f992-4371-40c0-8d00-61b1890a63d3","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d53c6ce0-f591-4314-b960-c8b986d5ed98","type":"BoxAnnotation"},{"attributes":{},"id":"808967b4-62e8-4839-b0ad-3462f07e50f9","type":"BasicTicker"},{"attributes":{},"id":"17a359a7-fb2e-4fa5-8637-9ec759f60c68","type":"ToolEvents"},{"attributes":{},"id":"45288fda-64bf-4980-ada6-d89034e938c9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c6a37280-b8a4-4dd4-8d3a-b5fc36c46390","type":"DataRange1d"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"ae91068d-fd49-471e-8435-483dfb2c27ca","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"6d450aae-5d9d-4841-9a9b-95f32e826d26","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8893158-e2e5-49e5-bfd8-fbac480d5837","type":"HoverTool"},{"id":"4533997e-5161-42f2-a1f1-ef1f508eb11c","type":"CrosshairTool"},{"id":"ae91068d-fd49-471e-8435-483dfb2c27ca","type":"WheelZoomTool"},{"id":"e7a6ac10-736d-48ea-9b1d-5cd85b75a24a","type":"BoxZoomTool"},{"id":"a1ab696e-411b-4d45-af98-437b474174aa","type":"PanTool"},{"id":"122ee7aa-97fe-4211-ad4d-d0b8bdb7fa2d","type":"SaveTool"},{"id":"208bcb87-a555-44f5-aafd-a0b9f0f6e09d","type":"ResizeTool"},{"id":"6d450aae-5d9d-4841-9a9b-95f32e826d26","type":"ResetTool"}]},"id":"7d945e59-8997-407e-8bf1-070e64086f58","type":"Toolbar"},{"attributes":{"axis_label":"timestamp","formatter":{"id":"45288fda-64bf-4980-ada6-d89034e938c9","type":"BasicTickFormatter"},"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2989795d-e114-42f1-bcbd-1e2a2c52f5f1","type":"BasicTicker"}},"id":"5b8a2835-bd4b-4df4-9042-e1166abde9dd","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2989795d-e114-42f1-bcbd-1e2a2c52f5f1","type":"BasicTicker"}},"id":"c7674ae1-214b-46b2-ac98-23bae2ccea5a","type":"Grid"},{"attributes":{"callback":null,"column_names":["performance","index","name","timestamp"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227],"name":["vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1"],"performance":[153.62,153.62,154.43,154.43,156.29,156.29,156.35,156.35,157.91,157.91,158.46,158.46,159.04,159.04,159.85,159.85,159.97,159.97,160.51,160.51,161.05,161.05,161.06,161.06,161.2,161.2,161.59,161.59,162.99,162.99,163.44,163.44,164.14,164.14,164.27,164.27,174.48,174.48,183.62,183.62,186.22,186.22,189.97,189.97,190.1,190.1,190.19,190.19,190.36,190.36,190.43,190.43,190.63,190.63,190.85,190.85,190.86,190.86,190.86,190.86,190.97,190.97,191.03,191.03,191.18,191.18,191.24,191.24,191.32,191.32,191.38,191.38,191.55,191.55,191.55,191.55,191.59,191.59,191.96,191.96,192.09,192.09,192.25,192.25,192.45,192.45,192.54,192.54,192.55,192.55,192.63,192.63,192.99,192.99,193.02,193.02,193.35,193.35,193.4,193.4,193.98,193.98,194.48,194.48,195.16,195.16,195.42,195.42,195.81,195.81,196.12,196.12,196.18,196.18,197.12,197.12,197.54,197.54,197.54,197.54,197.67,197.67,197.75,197.75,197.9,197.9,198.06,198.06,198.4,198.4,198.67,198.67,199.16,199.16,200.14,200.14,200.2,200.2,200.3,200.3,200.79,200.79,200.93,200.93,201.05,201.05,201.44,201.44,201.57,201.57,201.61,201.61,201.78,201.78,201.85,201.85,201.96,201.96,202.11,202.11,202.18,202.18,202.8,202.8,202.99,202.99,203.89,203.89,207.58,207.58,208.39,208.39,208.46,208.46,305.09,305.09,305.51,305.51,307.09,307.09,308.82,308.82,309.62,309.62,310.1,310.1,310.12,310.12,310.35,310.35,310.39,310.39,310.44,310.44,310.44,310.44,310.53,310.53,310.54,310.54,310.58,310.58,310.65,310.65,310.83,310.83,311.26,311.26,311.55,311.55,311.84,311.84,312.35,312.35,312.4,312.4,312.43,312.43,312.55,312.55,312.66,312.66,313.16,313.16,314.22,314.22,314.88,314.88],"timestamp":[915.284916878,944.284916878,738.284916878,768.284916878,797.284916878,827.284916878,886.284916878,915.284916878,856.284916878,886.284916878,1987.28491688,2017.28491688,708.284916878,738.284916878,2046.28491688,2075.28491688,768.284916878,797.284916878,679.284916878,708.284916878,1870.28491688,1899.28491688,2017.28491688,2046.28491688,827.284916878,856.284916878,2075.28491688,2104.28491688,1929.28491688,1958.28491688,1841.28491688,1870.28491688,1899.28491688,1929.28491688,1958.28491688,1987.28491688,650.284916878,679.284916878,2104.28491688,2132.28491688,2132.28491688,2160.28491688,596.284916878,623.284916878,1216.28491688,1243.28491688,1135.28491688,1162.28491688,1786.28491688,1813.28491688,516.284916878,542.284916878,1460.28491688,1487.28491688,1406.28491688,1433.28491688,435.284916878,462.284916878,1433.28491688,1460.28491688,1271.28491688,1298.28491688,1080.28491688,1108.28491688,1487.28491688,1514.28491688,1595.28491688,1622.28491688,1731.28491688,1758.28491688,1325.28491688,1352.28491688,569.284916878,596.284916878,1676.28491688,1703.28491688,355.284916878,381.284916878,1108.28491688,1135.28491688,489.284916878,516.284916878,1568.28491688,1595.28491688,1026.28491688,1053.28491688,1379.28491688,1406.28491688,408.284916878,435.284916878,1352.28491688,1379.28491688,1243.28491688,1271.28491688,1541.28491688,1568.28491688,1298.28491688,1325.28491688,999.284916878,1026.28491688,1189.28491688,1216.28491688,944.284916878,971.284916878,1758.28491688,1786.28491688,1514.28491688,1541.28491688,1703.28491688,1731.28491688,971.284916878,999.284916878,2321.28491688,2348.28491688,2617.28491688,2644.28491688,1813.28491688,1841.28491688,2187.28491688,2214.28491688,2536.28491688,2563.28491688,1622.28491688,1649.28491688,2268.28491688,2295.28491688,2697.28491688,2724.28491688,2563.28491688,2590.28491688,2348.28491688,2375.28491688,1053.28491688,1080.28491688,2644.28491688,2671.28491688,2724.28491688,2749.28491688,1649.28491688,1676.28491688,381.284916878,408.284916878,542.284916878,569.284916878,1162.28491688,1189.28491688,2671.28491688,2697.28491688,2483.28491688,2510.28491688,2456.28491688,2483.28491688,2510.28491688,2536.28491688,462.284916878,489.284916878,623.284916878,650.284916878,2160.28491688,2187.28491688,2590.28491688,2617.28491688,2295.28491688,2321.28491688,2429.28491688,2456.28491688,2241.28491688,2268.28491688,2375.28491688,2402.28491688,2402.28491688,2429.28491688,2214.28491688,2241.28491688,119.284916878,149.284916878,64.2849168777,94.2849168777,238.284916878,268.284916878,149.284916878,179.284916878,2970.28491688,2996.28491688,3073.28491688,3099.28491688,297.284916878,327.284916878,268.284916878,297.284916878,2800.28491688,2826.28491688,327.284916878,355.284916878,2852.28491688,2882.28491688,2826.28491688,2852.28491688,3128.28491688,3154.28491688,2911.28491688,2941.28491688,38.2849168777,64.2849168777,94.2849168777,119.284916878,2775.28491688,2800.28491688,2882.28491688,2911.28491688,2941.28491688,2970.28491688,3154.28491688,3180.28491688,179.284916878,208.284916878,208.284916878,238.284916878,3022.28491688,3047.28491688,2749.28491688,2775.28491688,3047.28491688,3073.28491688,2996.28491688,3022.28491688,3099.28491688,3128.28491688]}},"id":"2014f6c6-fc0e-41bf-b7f3-faae3e161a2d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"938fe8c3-d9d2-4beb-910f-162c9af57a15","type":"DataRange1d"},{"attributes":{"below":[{"id":"2f89db3c-3b9d-4d04-95ba-35705f6fa615","type":"LinearAxis"}],"left":[{"id":"5b8a2835-bd4b-4df4-9042-e1166abde9dd","type":"LinearAxis"}],"renderers":[{"id":"2f89db3c-3b9d-4d04-95ba-35705f6fa615","type":"LinearAxis"},{"id":"96ec3018-b12e-404f-ad05-5e8110eac375","type":"Grid"},{"id":"5b8a2835-bd4b-4df4-9042-e1166abde9dd","type":"LinearAxis"},{"id":"c7674ae1-214b-46b2-ac98-23bae2ccea5a","type":"Grid"},{"id":"d53c6ce0-f591-4314-b960-c8b986d5ed98","type":"BoxAnnotation"},{"id":"8a1e4c0e-62fe-4fec-a969-e08c2575288c","type":"Legend"},{"id":"b0a8b6cc-f8a3-4104-b238-74f7ef2bbc5a","type":"GlyphRenderer"}],"sizing_mode":"stretch_both","title":{"id":"0d6e2b0f-4597-40ef-8b3a-591451719683","type":"Title"},"tool_events":{"id":"17a359a7-fb2e-4fa5-8637-9ec759f60c68","type":"ToolEvents"},"toolbar":{"id":"7d945e59-8997-407e-8bf1-070e64086f58","type":"Toolbar"},"x_range":{"id":"c6a37280-b8a4-4dd4-8d3a-b5fc36c46390","type":"DataRange1d"},"y_range":{"id":"938fe8c3-d9d2-4beb-910f-162c9af57a15","type":"DataRange1d"}},"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"d53c6ce0-f591-4314-b960-c8b986d5ed98","type":"BoxAnnotation"},"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"e7a6ac10-736d-48ea-9b1d-5cd85b75a24a","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"line"},"id":"0d6e2b0f-4597-40ef-8b3a-591451719683","type":"Title"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"a1ab696e-411b-4d45-af98-437b474174aa","type":"PanTool"},{"attributes":{"line_color":{"value":"#e41a1c"},"line_width":{"value":2},"x":{"field":"performance"},"y":{"field":"timestamp"}},"id":"5c156f9e-aaab-4ffa-9a6e-b35a19f32fa1","type":"Line"},{"attributes":{"callback":null,"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"c8893158-e2e5-49e5-bfd8-fbac480d5837","type":"HoverTool"},{"attributes":{},"id":"2989795d-e114-42f1-bcbd-1e2a2c52f5f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"208bcb87-a555-44f5-aafd-a0b9f0f6e09d","type":"ResizeTool"},{"attributes":{"label":{"value":"vm-1"},"renderers":[{"id":"b0a8b6cc-f8a3-4104-b238-74f7ef2bbc5a","type":"GlyphRenderer"}]},"id":"4659992a-b160-4eb3-a724-387c88a2c52b","type":"LegendItem"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"},"ticker":{"id":"808967b4-62e8-4839-b0ad-3462f07e50f9","type":"BasicTicker"}},"id":"96ec3018-b12e-404f-ad05-5e8110eac375","type":"Grid"},{"attributes":{"data_source":{"id":"2014f6c6-fc0e-41bf-b7f3-faae3e161a2d","type":"ColumnDataSource"},"glyph":{"id":"5c156f9e-aaab-4ffa-9a6e-b35a19f32fa1","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"15af63f8-e262-468f-ab24-f0313bc80a5a","type":"Line"},"selection_glyph":null},"id":"b0a8b6cc-f8a3-4104-b238-74f7ef2bbc5a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"4533997e-5161-42f2-a1f1-ef1f508eb11c","type":"CrosshairTool"},{"attributes":{"axis_label":"performance","formatter":{"id":"7489f992-4371-40c0-8d00-61b1890a63d3","type":"BasicTickFormatter"},"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"},"ticker":{"id":"808967b4-62e8-4839-b0ad-3462f07e50f9","type":"BasicTicker"}},"id":"2f89db3c-3b9d-4d04-95ba-35705f6fa615","type":"LinearAxis"},{"attributes":{"items":[{"id":"4659992a-b160-4eb3-a724-387c88a2c52b","type":"LegendItem"}],"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"8a1e4c0e-62fe-4fec-a969-e08c2575288c","type":"Legend"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"performance"},"y":{"field":"timestamp"}},"id":"15af63f8-e262-468f-ab24-f0313bc80a5a","type":"Line"},{"attributes":{"plot":{"id":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f","subtype":"Figure","type":"Plot"}},"id":"122ee7aa-97fe-4211-ad4d-d0b8bdb7fa2d","type":"SaveTool"}],"root_ids":["8055348f-9f42-4c2d-b3a6-8c4f5e18e24f"]},"title":"Bokeh Application","version":"0.12.4"}};
      var render_items = [{"docid":"ea719502-39f8-4c9a-abed-9d1e35504687","elementid":"9e0d031f-e2f9-4e41-bb32-13194e7ad40e","modelid":"8055348f-9f42-4c2d-b3a6-8c4f5e18e24f"}];
      
      Bokeh.embed.embed_items(docs_json, render_items);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
