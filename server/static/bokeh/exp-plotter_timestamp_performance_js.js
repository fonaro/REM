(function() {
  var fn = function() {
    Bokeh.safely(function() {
      var docs_json = {"8bd3e8df-3a54-4a2a-b314-ca1c9fe5b125":{"roots":{"references":[{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"2e7ddb19-73e8-4a59-ac83-83f829cde9c2","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"943eb6e2-49fb-469a-b407-01bcdbcb3fb7","type":"DataRange1d"},{"attributes":{"label":{"value":"vm-1"},"renderers":[{"id":"57bf88a9-cad8-43b7-9e0c-2253d8c60e08","type":"GlyphRenderer"}]},"id":"434241c6-cb99-4b4b-ac5c-e48b6892bec0","type":"LegendItem"},{"attributes":{"line_color":{"value":"#377eb8"},"line_width":{"value":2},"x":{"field":"timestamp"},"y":{"field":"performance"}},"id":"705f33be-377b-44dd-9cbf-7f5acccc79d4","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cd4f277-4a15-406f-8364-0344d4ec9b39","type":"BasicTicker"}},"id":"9cb37eb1-2655-4cb8-b613-0520f43284a8","type":"Grid"},{"attributes":{},"id":"9a843eee-85bf-4095-a342-6281391982e6","type":"BasicTicker"},{"attributes":{"axis_label":"timestamp","formatter":{"id":"62cb5bc2-6e7b-4e53-926c-60f9d6c2da70","type":"BasicTickFormatter"},"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a843eee-85bf-4095-a342-6281391982e6","type":"BasicTicker"}},"id":"7eedee02-5b44-45fd-919f-2dfb7e9a975c","type":"LinearAxis"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"40606476-a31b-4366-b5e4-37b43aa52724","type":"PanTool"},{"attributes":{},"id":"8cd4f277-4a15-406f-8364-0344d4ec9b39","type":"BasicTicker"},{"attributes":{"callback":null,"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"aff5c6b1-578f-4e7f-b5da-94a873f233ee","type":"HoverTool"},{"attributes":{"items":[{"id":"434241c6-cb99-4b4b-ac5c-e48b6892bec0","type":"LegendItem"},{"id":"3c6869e4-69be-468a-9292-ba27bd3c490f","type":"LegendItem"}],"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"b6fd8abf-a72f-4e8a-bad5-bba2202b9111","type":"Legend"},{"attributes":{"line_color":{"value":"#e41a1c"},"line_width":{"value":2},"x":{"field":"timestamp"},"y":{"field":"performance"}},"id":"c740fcec-e9f2-426b-bea5-6f012fb052f4","type":"Line"},{"attributes":{"below":[{"id":"7eedee02-5b44-45fd-919f-2dfb7e9a975c","type":"LinearAxis"}],"left":[{"id":"8911764c-52f3-4850-a5de-fc59a8d2e3a1","type":"LinearAxis"}],"renderers":[{"id":"7eedee02-5b44-45fd-919f-2dfb7e9a975c","type":"LinearAxis"},{"id":"fe0997b0-e777-4ab7-9682-f59b134aab60","type":"Grid"},{"id":"8911764c-52f3-4850-a5de-fc59a8d2e3a1","type":"LinearAxis"},{"id":"9cb37eb1-2655-4cb8-b613-0520f43284a8","type":"Grid"},{"id":"17a6bb3a-98a5-4082-91f5-2141b8271c3d","type":"BoxAnnotation"},{"id":"b6fd8abf-a72f-4e8a-bad5-bba2202b9111","type":"Legend"},{"id":"57bf88a9-cad8-43b7-9e0c-2253d8c60e08","type":"GlyphRenderer"},{"id":"01746e25-3586-412c-be6e-3ff605ebbff0","type":"GlyphRenderer"}],"sizing_mode":"stretch_both","title":{"id":"e39870f3-051d-4ccd-828b-f4b63d507de2","type":"Title"},"tool_events":{"id":"1a261252-6bd5-450a-8eb6-d65c330064f9","type":"ToolEvents"},"toolbar":{"id":"bc5058d1-ba64-41a6-9a93-8bb055343845","type":"Toolbar"},"x_range":{"id":"943eb6e2-49fb-469a-b407-01bcdbcb3fb7","type":"DataRange1d"},"y_range":{"id":"9f9ae6d0-492b-471b-a9a2-322be90d4e2e","type":"DataRange1d"}},"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"032ce75b-645a-40ba-ada3-cd1a3fff7295","type":"ResizeTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"timestamp"},"y":{"field":"performance"}},"id":"e2b3f6c7-601b-4f9f-9f3c-4622ff28e65f","type":"Line"},{"attributes":{"axis_label":"performance","formatter":{"id":"8e3d8754-453e-481a-aad8-8b4cadadb135","type":"BasicTickFormatter"},"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cd4f277-4a15-406f-8364-0344d4ec9b39","type":"BasicTicker"}},"id":"8911764c-52f3-4850-a5de-fc59a8d2e3a1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"66526f24-f528-4389-87b3-050bf8f5bc3c","type":"ColumnDataSource"},"glyph":{"id":"c740fcec-e9f2-426b-bea5-6f012fb052f4","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e2b3f6c7-601b-4f9f-9f3c-4622ff28e65f","type":"Line"},"selection_glyph":null},"id":"57bf88a9-cad8-43b7-9e0c-2253d8c60e08","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["timestamp","index","name","performance"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227],"name":["vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1","vm-1"],"performance":[310.65,305.51,310.65,310.83,305.51,310.83,305.09,308.82,305.09,312.4,308.82,312.4,312.43,307.09,312.43,307.09,310.35,310.12,310.35,310.12,310.44,191.59,310.44,191.59,200.79,192.55,200.79,190.86,192.55,190.86,201.85,192.09,201.85,192.09,190.43,200.93,190.43,191.55,200.93,189.97,191.55,189.97,201.96,174.48,201.96,160.51,174.48,160.51,159.04,159.04,154.43,154.43,159.97,156.29,159.97,156.29,161.2,157.91,161.2,156.35,157.91,153.62,156.35,153.62,194.48,194.48,196.12,193.4,196.12,193.4,192.45,199.16,192.45,191.03,199.16,191.96,191.03,190.19,191.96,190.19,201.05,201.05,193.98,193.98,190.1,190.1,192.99,190.97,192.99,193.35,190.97,191.38,193.35,191.38,192.63,192.54,192.63,192.54,190.85,190.85,190.86,190.86,190.63,191.18,190.63,195.42,191.18,193.02,195.42,192.25,193.02,192.25,191.24,197.75,191.24,197.75,200.3,200.3,191.55,195.81,191.55,191.32,195.81,195.16,191.32,195.16,190.36,197.54,190.36,163.44,197.54,161.05,163.44,164.14,161.05,164.14,162.99,164.27,162.99,164.27,158.46,158.46,161.06,159.85,161.06,161.59,159.85,183.62,161.59,183.62,186.22,202.11,186.22,202.11,197.54,208.46,197.54,208.46,203.89,203.89,197.9,197.9,202.8,196.18,202.8,198.67,196.18,207.58,198.67,208.39,207.58,202.99,208.39,202.99,201.61,201.61,201.57,201.78,201.57,197.67,201.78,197.67,198.4,202.18,198.4,197.12,202.18,200.14,197.12,200.14,201.44,198.06,201.44,200.2,198.06,200.2,312.66,311.26,312.66,310.39,311.26,310.53,310.39,310.44,310.53,311.55,310.44,311.55,310.58,310.58,311.84,311.84,309.62,314.22,309.62,312.55,314.22,313.16,312.55,310.1,313.16,314.88,310.1,314.88,310.54,312.35,310.54,312.35],"timestamp":[38.2849168777,64.2849168777,64.2849168777,94.2849168777,94.2849168777,119.284916878,119.284916878,149.284916878,149.284916878,179.284916878,179.284916878,208.284916878,208.284916878,238.284916878,238.284916878,268.284916878,268.284916878,297.284916878,297.284916878,327.284916878,327.284916878,355.284916878,355.284916878,381.284916878,381.284916878,408.284916878,408.284916878,435.284916878,435.284916878,462.284916878,462.284916878,489.284916878,489.284916878,516.284916878,516.284916878,542.284916878,542.284916878,569.284916878,569.284916878,596.284916878,596.284916878,623.284916878,623.284916878,650.284916878,650.284916878,679.284916878,679.284916878,708.284916878,708.284916878,738.284916878,738.284916878,768.284916878,768.284916878,797.284916878,797.284916878,827.284916878,827.284916878,856.284916878,856.284916878,886.284916878,886.284916878,915.284916878,915.284916878,944.284916878,944.284916878,971.284916878,971.284916878,999.284916878,999.284916878,1026.28491688,1026.28491688,1053.28491688,1053.28491688,1080.28491688,1080.28491688,1108.28491688,1108.28491688,1135.28491688,1135.28491688,1162.28491688,1162.28491688,1189.28491688,1189.28491688,1216.28491688,1216.28491688,1243.28491688,1243.28491688,1271.28491688,1271.28491688,1298.28491688,1298.28491688,1325.28491688,1325.28491688,1352.28491688,1352.28491688,1379.28491688,1379.28491688,1406.28491688,1406.28491688,1433.28491688,1433.28491688,1460.28491688,1460.28491688,1487.28491688,1487.28491688,1514.28491688,1514.28491688,1541.28491688,1541.28491688,1568.28491688,1568.28491688,1595.28491688,1595.28491688,1622.28491688,1622.28491688,1649.28491688,1649.28491688,1676.28491688,1676.28491688,1703.28491688,1703.28491688,1731.28491688,1731.28491688,1758.28491688,1758.28491688,1786.28491688,1786.28491688,1813.28491688,1813.28491688,1841.28491688,1841.28491688,1870.28491688,1870.28491688,1899.28491688,1899.28491688,1929.28491688,1929.28491688,1958.28491688,1958.28491688,1987.28491688,1987.28491688,2017.28491688,2017.28491688,2046.28491688,2046.28491688,2075.28491688,2075.28491688,2104.28491688,2104.28491688,2132.28491688,2132.28491688,2160.28491688,2160.28491688,2187.28491688,2187.28491688,2214.28491688,2214.28491688,2241.28491688,2241.28491688,2268.28491688,2268.28491688,2295.28491688,2295.28491688,2321.28491688,2321.28491688,2348.28491688,2348.28491688,2375.28491688,2375.28491688,2402.28491688,2402.28491688,2429.28491688,2429.28491688,2456.28491688,2456.28491688,2483.28491688,2483.28491688,2510.28491688,2510.28491688,2536.28491688,2536.28491688,2563.28491688,2563.28491688,2590.28491688,2590.28491688,2617.28491688,2617.28491688,2644.28491688,2644.28491688,2671.28491688,2671.28491688,2697.28491688,2697.28491688,2724.28491688,2724.28491688,2749.28491688,2749.28491688,2775.28491688,2775.28491688,2800.28491688,2800.28491688,2826.28491688,2826.28491688,2852.28491688,2852.28491688,2882.28491688,2882.28491688,2911.28491688,2911.28491688,2941.28491688,2941.28491688,2970.28491688,2970.28491688,2996.28491688,2996.28491688,3022.28491688,3022.28491688,3047.28491688,3047.28491688,3073.28491688,3073.28491688,3099.28491688,3099.28491688,3128.28491688,3128.28491688,3154.28491688,3154.28491688,3180.28491688]}},"id":"66526f24-f528-4389-87b3-050bf8f5bc3c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17a6bb3a-98a5-4082-91f5-2141b8271c3d","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"17a6bb3a-98a5-4082-91f5-2141b8271c3d","type":"BoxAnnotation"},"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"158ee2a2-51cd-41fe-8147-5b6616e76852","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"timestamp"},"y":{"field":"performance"}},"id":"35cbf2ca-b8ac-4381-b7d3-dcf8e05a5b1e","type":"Line"},{"attributes":{},"id":"8e3d8754-453e-481a-aad8-8b4cadadb135","type":"BasicTickFormatter"},{"attributes":{},"id":"1a261252-6bd5-450a-8eb6-d65c330064f9","type":"ToolEvents"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"d32ce9bd-8b68-4457-ac5a-887c33a6b20f","type":"CrosshairTool"},{"attributes":{"callback":null,"column_names":["timestamp","index","name","performance"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221],"name":["vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2","vm-2"],"performance":[227.9,184.34,227.9,189.84,184.34,189.84,184.07,180.96,184.07,180.96,190.85,183.67,190.85,183.67,185.26,188.64,185.26,188.64,183.3,183.3,185.68,185.68,302.83,302.83,310.19,310.19,307.05,307.05,306.09,306.09,310.93,308.73,310.93,308.73,306.88,306.88,311.06,311.69,311.06,311.69,307.84,307.84,309.41,309.41,309.41,309.41,317.15,312.21,317.15,311.57,312.21,311.57,310.81,310.81,309.84,309.91,309.84,309.91,312.38,312.38,312.63,312.63,315.14,315.14,311.94,306.6,311.94,305.98,306.6,308.37,305.98,308.37,307.89,307.89,309.19,308.94,309.19,307.77,308.94,312.55,307.77,312.55,307.41,307.41,309.23,296.9,309.23,296.9,311.26,310.14,311.26,310.14,307.41,307.41,308.71,308.71,315.08,315.08,313.5,309.75,313.5,310.94,309.75,310.31,310.94,308.95,310.31,308.95,308.95,308.95,308.69,308.69,311.66,311.66,303.21,307.57,303.21,307.57,312.09,307.67,312.09,313.27,307.67,313.27,310.25,310.25,308.63,308.63,311.45,311.45,310.56,310.56,309.99,310.46,309.99,315.91,310.46,311.44,315.91,313.89,311.44,313.89,310.87,310.95,310.87,310.07,310.95,310.85,310.07,311.95,310.85,307.43,311.95,307.43,304.81,304.81,311.65,311.65,306.1,306.1,306.51,297.35,306.51,297.35,305.88,300.78,305.88,305.92,300.78,305.34,305.92,307.34,305.34,304.79,307.34,308.6,304.79,306.46,308.6,306.46,313.54,313.54,305.71,309.71,305.71,309.71,305.38,305.38,308.68,308.68,306.98,306.98,308.07,308.07,191.95,191.95,183.11,183.11,187.25,187.25,175.7,175.7,180.91,182.09,180.91,182.09,186.49,186.49,176.37,178.08,176.37,178.08,177.95,177.95,179.99,179.99,175.06,175.06,173.84,173.84,176.03,176.03],"timestamp":[38.2913711071,70.2913711071,70.2913711071,98.2913711071,98.2913711071,126.291371107,126.291371107,154.291371107,154.291371107,183.291371107,183.291371107,211.291371107,211.291371107,239.291371107,239.291371107,268.291371107,268.291371107,296.291371107,296.291371107,324.291371107,324.291371107,349.291371107,349.291371107,379.291371107,379.291371107,409.291371107,409.291371107,438.291371107,438.291371107,468.291371107,468.291371107,498.291371107,498.291371107,523.291371107,523.291371107,549.291371107,549.291371107,579.291371107,579.291371107,608.291371107,608.291371107,634.291371107,634.291371107,660.291371107,660.291371107,689.291371107,689.291371107,715.291371107,715.291371107,741.291371107,741.291371107,770.291371107,770.291371107,800.291371107,800.291371107,825.291371107,825.291371107,851.291371107,851.291371107,881.291371107,881.291371107,907.291371107,907.291371107,932.291371107,932.291371107,958.291371107,958.291371107,984.291371107,984.291371107,1010.29137111,1010.29137111,1039.29137111,1040.29137111,1069.29137111,1069.29137111,1099.29137111,1099.29137111,1128.29137111,1128.29137111,1158.29137111,1158.29137111,1184.29137111,1184.29137111,1209.29137111,1209.29137111,1239.29137111,1239.29137111,1269.29137111,1269.29137111,1298.29137111,1298.29137111,1328.29137111,1328.29137111,1357.29137111,1357.29137111,1383.29137111,1383.29137111,1413.29137111,1413.29137111,1439.29137111,1439.29137111,1468.29137111,1468.29137111,1497.29137111,1497.29137111,1527.29137111,1527.29137111,1556.29137111,1556.29137111,1586.29137111,1586.29137111,1612.29137111,1612.29137111,1638.29137111,1638.29137111,1663.29137111,1663.29137111,1689.29137111,1689.29137111,1715.29137111,1715.29137111,1741.29137111,1741.29137111,1766.29137111,1766.29137111,1792.29137111,1792.29137111,1818.29137111,1818.29137111,1844.29137111,1844.29137111,1869.29137111,1869.29137111,1895.29137111,1895.29137111,1921.29137111,1921.29137111,1950.29137111,1950.29137111,1980.29137111,1980.29137111,2010.29137111,2010.29137111,2039.29137111,2039.29137111,2069.29137111,2069.29137111,2098.29137111,2098.29137111,2128.29137111,2128.29137111,2158.29137111,2158.29137111,2187.29137111,2187.29137111,2217.29137111,2217.29137111,2246.29137111,2246.29137111,2276.29137111,2276.29137111,2302.29137111,2302.29137111,2328.29137111,2328.29137111,2358.29137111,2358.29137111,2387.29137111,2387.29137111,2417.29137111,2417.29137111,2446.29137111,2446.29137111,2476.29137111,2476.29137111,2506.29137111,2506.29137111,2535.29137111,2535.29137111,2565.29137111,2565.29137111,2594.29137111,2594.29137111,2624.29137111,2624.29137111,2650.29137111,2650.29137111,2676.29137111,2676.29137111,2702.29137111,2702.29137111,2728.29137111,2728.29137111,2757.29137111,2757.29137111,2786.29137111,2786.29137111,2815.29137111,2815.29137111,2844.29137111,2844.29137111,2873.29137111,2873.29137111,2902.29137111,2902.29137111,2931.29137111,2931.29137111,2960.29137111,2960.29137111,2989.29137111,2989.29137111,3018.29137111,3018.29137111,3047.29137111,3047.29137111,3076.29137111,3076.29137111,3105.29137111,3105.29137111,3134.29137111,3134.29137111,3163.29137111]}},"id":"03bae2e3-92a0-4202-a3ff-71f10a5bd574","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a843eee-85bf-4095-a342-6281391982e6","type":"BasicTicker"}},"id":"fe0997b0-e777-4ab7-9682-f59b134aab60","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aff5c6b1-578f-4e7f-b5da-94a873f233ee","type":"HoverTool"},{"id":"d32ce9bd-8b68-4457-ac5a-887c33a6b20f","type":"CrosshairTool"},{"id":"2e7ddb19-73e8-4a59-ac83-83f829cde9c2","type":"WheelZoomTool"},{"id":"158ee2a2-51cd-41fe-8147-5b6616e76852","type":"BoxZoomTool"},{"id":"40606476-a31b-4366-b5e4-37b43aa52724","type":"PanTool"},{"id":"097bb374-ab61-4cde-9e79-e852c5da5121","type":"SaveTool"},{"id":"032ce75b-645a-40ba-ada3-cd1a3fff7295","type":"ResizeTool"},{"id":"cb831b6c-c0e1-4388-b837-6f48fda3635d","type":"ResetTool"}]},"id":"bc5058d1-ba64-41a6-9a93-8bb055343845","type":"Toolbar"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"cb831b6c-c0e1-4388-b837-6f48fda3635d","type":"ResetTool"},{"attributes":{},"id":"62cb5bc2-6e7b-4e53-926c-60f9d6c2da70","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"03bae2e3-92a0-4202-a3ff-71f10a5bd574","type":"ColumnDataSource"},"glyph":{"id":"705f33be-377b-44dd-9cbf-7f5acccc79d4","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"35cbf2ca-b8ac-4381-b7d3-dcf8e05a5b1e","type":"Line"},"selection_glyph":null},"id":"01746e25-3586-412c-be6e-3ff605ebbff0","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"line"},"id":"e39870f3-051d-4ccd-828b-f4b63d507de2","type":"Title"},{"attributes":{"plot":{"id":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29","subtype":"Figure","type":"Plot"}},"id":"097bb374-ab61-4cde-9e79-e852c5da5121","type":"SaveTool"},{"attributes":{"label":{"value":"vm-2"},"renderers":[{"id":"01746e25-3586-412c-be6e-3ff605ebbff0","type":"GlyphRenderer"}]},"id":"3c6869e4-69be-468a-9292-ba27bd3c490f","type":"LegendItem"},{"attributes":{"callback":null},"id":"9f9ae6d0-492b-471b-a9a2-322be90d4e2e","type":"DataRange1d"}],"root_ids":["6f0bfca7-68c5-48b5-8b6d-82af15eaee29"]},"title":"Bokeh Application","version":"0.12.4"}};
      var render_items = [{"docid":"8bd3e8df-3a54-4a2a-b314-ca1c9fe5b125","elementid":"3349ec2b-257c-4033-9b40-9666aa45d3a8","modelid":"6f0bfca7-68c5-48b5-8b6d-82af15eaee29"}];
      
      Bokeh.embed.embed_items(docs_json, render_items);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();