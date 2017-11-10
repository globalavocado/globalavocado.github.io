var map = L.map('map', { 
    zoomControl:true 
    }).fitBounds([[-17.00295,34.87267],[-16.54275,35.49477]]);
// 34.87267,-16.54275,35.49477,-17.00295

        var additional_attrib = 'data kindly provided by <a href="http://www.worldbank.org/en/country/malawi" target ="_blank">World Bank</a>, <a href="http://www.lands.gov.mw/index.php/departments/surveys.html" target ="_blank">Malawi Department of Surveys</a> and OSM.<br>';
    
    var feature_group = new L.featureGroup([]);

    var raster_group = new L.LayerGroup([]);
    
        var basemap_OSM = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { 
            attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}); 
        basemap_OSM.addTo(map);
        
        var basemap_openTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: additional_attrib + 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org" target="_blank">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org" target="_blank">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC-BY-SA</a>)'});

    var layerOrder=new Array();

    function pop_nsanjedistrict(feature, layer) {
                                        
                var popupContent = '<table><tr><th scope="row">District</th><td>' + Autolinker.link(String(feature.properties['ADMIN3'])) + '</td></tr><tr><th scope="row">Region</th><td>' + Autolinker.link(String(feature.properties['ADMIN2'])) + '</td></tr></table>';
                layer.bindPopup(popupContent);
                }
                        
                var nsanjedistrictJSON = new L.geoJson(nsanjedistrict,{
                    onEachFeature: pop_nsanjedistrict,
                    style: function (feature) {
                        return {color: feature.properties.border_color,
                                fillColor: feature.properties.color,
                                weight: feature.properties.radius,
                                dashArray: feature.properties.border_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp_fill};
                        }
                    });
                    feature_group.addLayer(nsanjedistrictJSON);
                    layerOrder[layerOrder.length] = nsanjedistrictJSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        nsanjedistrictJSON.addTo(map);

    
    function pop_schoolcatchmentarea5km(feature, layer) {                        
                var popupContent = '5km school catchment area';
                layer.bindPopup(popupContent);
                            }
                var schoolcatchmentarea5kmJSON = new L.geoJson(schoolcatchmentarea5km,{
                    onEachFeature: pop_schoolcatchmentarea5km,
                    style: function (feature) {
                        return {color: feature.properties.border_color,
                                fillColor: feature.properties.color,
                                weight: feature.properties.radius,
                                dashArray: feature.properties.border_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp_fill};
                        }
                    });
                    feature_group.addLayer(schoolcatchmentarea5kmJSON);
                    layerOrder[layerOrder.length] = schoolcatchmentarea5kmJSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        schoolcatchmentarea5kmJSON.addTo(map);
                            
    function pop_schoolcatchmentarea3km(feature, layer) {
                var popupContent = '3km school catchment area';
        layer.bindPopup(popupContent);
                }            
                var schoolcatchmentarea3kmJSON = new L.geoJson(schoolcatchmentarea3km,{
                    onEachFeature: pop_schoolcatchmentarea3km,
                    style: function (feature) {
                        return {color: feature.properties.border_color,
                                fillColor: feature.properties.color,
                                weight: feature.properties.radius,
                                dashArray: feature.properties.border_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp_fill};
                        }
                    });
                    feature_group.addLayer(schoolcatchmentarea3kmJSON);
                    layerOrder[layerOrder.length] = schoolcatchmentarea3kmJSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        schoolcatchmentarea3kmJSON.addTo(map);

    function pop_floodinglateJanuary2015(feature, layer) {
                                        
                var popupContent = '<table><tr><th scope="row">Date</th><td>' + Autolinker.link(String(feature.properties['src_date'])) + '</td></tr><tr><tr><th scope="row">source</th><td>' + Autolinker.link(String(feature.properties['txt'])) + '</td></tr><th scope="row">ACT id</th><td>' + Autolinker.link(String(feature.properties['act_id'])) + '</td></tr><tr><th scope="row">Area (in ha)</th><td>' + Autolinker.link(String(feature.properties['area_ha'])) + '</td></tr></table>';
                layer.bindPopup(popupContent);
                }
                        
                var floodinglateJanuary2015JSON = new L.geoJson(floodinglateJanuary2015,{
                    onEachFeature: pop_floodinglateJanuary2015,
                    style: function (feature) {
                        return {color: feature.properties.border_color,
                                fillColor: feature.properties.color,
                                weight: feature.properties.radius,
                                dashArray: feature.properties.border_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp_fill};
                        }
                    });
                    feature_group.addLayer(floodinglateJanuary2015JSON);
                    layerOrder[layerOrder.length] = floodinglateJanuary2015JSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        floodinglateJanuary2015JSON.addTo(map);
                        
    function pop_marsheslateJanuary2015(feature, layer) {
                                        
                var popupContent = '<table><tr><th scope="row">Vegetation</th><td>' + Autolinker.link(String(feature.properties['VEGETATION'])) + '</td></tr><tr><th scope="row">hectares</th><td>' + Autolinker.link(String(feature.properties['Ha'])) + '</td></tr><tr><th scope="row">Area</th><td>' + Autolinker.link(String(feature.properties['AREA_2'])) + '</td></tr><tr><th scope="row">Perimeter</th><td>' + Autolinker.link(String(feature.properties['PERIMETE_2'])) + '</td></tr></table>';
                layer.bindPopup(popupContent);
                }
                        
                var marsheslateJanuary2015JSON = new L.geoJson(marsheslateJanuary2015,{
                    onEachFeature: pop_marsheslateJanuary2015,
                    style: function (feature) {
                        return {color: feature.properties.border_color,
                                fillColor: feature.properties.color,
                                weight: feature.properties.radius,
                                dashArray: feature.properties.border_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp_fill};
                        }
                    });
                    feature_group.addLayer(marsheslateJanuary2015JSON);
                    layerOrder[layerOrder.length] = marsheslateJanuary2015JSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        marsheslateJanuary2015JSON.addTo(map);
                            
    function pop_nsanjeosmroadsreprojected(feature, layer) {
                                        
                var popupContent = '<table><tr><th scope="row">ID</th><td>' + Autolinker.link(String(feature.properties['id'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">Highway</th><td>' + Autolinker.link(String(feature.properties['highway'])) + '</td></tr><tr><th scope="row">Lanes</th><td>' + Autolinker.link(String(feature.properties['lanes'])) + '</td></tr><tr><th scope="row">one-way</th><td>' + Autolinker.link(String(feature.properties['oneway'])) + '</td></tr><tr><th scope="row">surface</th><td>' + Autolinker.link(String(feature.properties['surface'])) + '</td></tr><tr><th scope="row">access</th><td>' + Autolinker.link(String(feature.properties['access'])) + '</td></tr></table>';
                layer.bindPopup(popupContent);
                }
                        
                var nsanjeosmroadsreprojectedJSON = new L.geoJson(nsanjeosmroadsreprojected,{
                    onEachFeature: pop_nsanjeosmroadsreprojected,
                    style: function (feature) {
                        return {weight: feature.properties.radius,
                                color: feature.properties.color,
                                dashArray: feature.properties.pen_style,
                                opacity: feature.properties.transp,
                                fillOpacity: feature.properties.transp};
                        }
                    });
                    feature_group.addLayer(nsanjeosmroadsreprojectedJSON);
                    layerOrder[layerOrder.length] = nsanjeosmroadsreprojectedJSON;
                    for (index = 0; index < layerOrder.length; index++) {
                        feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
                        }
                        nsanjeosmroadsreprojectedJSON.addTo(map);
                        
function pop_secondaryschools(feature, layer) {                           
        var popupContent = '<table><tr><th scope="row">School Name</th><td>' + Autolinker.link(String(feature.properties['School_Nam'])) + '</td></tr><tr><th scope="row">School Type</th><td>' + Autolinker.link(String(feature.properties['Type'])) + '</td></tr><tr><th scope="row">Female Students</th><td>' + Autolinker.link(String(feature.properties['Female_Stu'])) + '</td></tr><tr><th scope="row">Male Students</th><td>' + Autolinker.link(String(feature.properties['Male_Stude'])) + '</td></tr><tr><th scope="row">EMIS_Number</th><td>' + Autolinker.link(String(feature.properties['EMIS_Numbe'])) + '</td></tr><tr><th scope="row">Latitude</th><td>' + Autolinker.link(String(feature.properties['Lat'])) + '</td></tr><tr><th scope="row">Longitude</th><td>' + Autolinker.link(String(feature.properties['Long'])) + '</td></tr></table>';
        layer.bindPopup(popupContent);
                    }
                var secondaryschoolsJSON = new L.geoJson(secondaryschools,{
                    onEachFeature: pop_secondaryschools,
                    pointToLayer: function (feature, latlng) {  
                        return L.circleMarker(latlng, {
                            radius: feature.properties.radius,
                            fillColor: feature.properties.color,
                            color: feature.properties.borderColor,
                            weight: 1,
                            opacity: feature.properties.transp,
                            fillOpacity: feature.properties.transp
                            }).bindLabel(feature.properties.School_Nam)
                        }
                    });
                    feature_group.addLayer(secondaryschoolsJSON);

                    var cluster_groupsecondaryschoolsJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
                    cluster_groupsecondaryschoolsJSON.addLayer(secondaryschoolsJSON);
                    cluster_groupsecondaryschoolsJSON.addTo(map);

    function pop_floodreliefschools(feature, layer) {                                    
        var popupContent = '<table><tr><th scope="row">School Name</th><td>' + Autolinker.link(String(feature.properties['SCHOOL_NAM'])) + '</td></tr><tr><th scope="row">School Type</th><td>' + Autolinker.link(String(feature.properties['CAMP'])) + '</td></tr><tr><th scope="row">District</th><td>' + Autolinker.link(String(feature.properties['DISTRICT_1'])) + '</td></tr><tr><th scope="row">Teachers</th><td>' + Autolinker.link(String(feature.properties['TEACHER_NO'])) + '</td></tr><tr><th scope="row">Female Students</th><td>' + Autolinker.link(String(feature.properties['GIRLS_NO'])) + '</td></tr><tr><th scope="row">Male Students</th><td>' + Autolinker.link(String(feature.properties['BOYS_NO'])) + '</td></tr><tr><th scope="row">EMIS Number</th><td>' + Autolinker.link(String(feature.properties['EMIS_NUMBE'])) + '</td></tr><tr><th scope="row">Latitude</th><td>' + Autolinker.link(String(feature.properties['LAT'])) + '</td></tr><tr><th scope="row">Longitude</th><td>' + Autolinker.link(String(feature.properties['LONG'])) + '</td></tr></table>';
        layer.bindPopup(popupContent);
                }
                var floodreliefschoolsJSON = new L.geoJson(floodreliefschools,{
                    onEachFeature: pop_floodreliefschools,
                    pointToLayer: function (feature, latlng) {  
                        return L.circleMarker(latlng, {
                            radius: feature.properties.radius,
                            fillColor: feature.properties.color,
                            color: feature.properties.borderColor,
                            weight: 1,
                            opacity: feature.properties.transp,
                            fillOpacity: feature.properties.transp
                            }).bindLabel(feature.properties.SCHOOL_NAM)
                        }
                    });
                    feature_group.addLayer(floodreliefschoolsJSON);

                    var cluster_groupfloodreliefschoolsJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
                    cluster_groupfloodreliefschoolsJSON.addLayer(floodreliefschoolsJSON);
                    cluster_groupfloodreliefschoolsJSON.addTo(map);

    function pop_villagesNSO1998(feature, layer) {
        var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Village Code</th><td>' + Autolinker.link(String(feature.properties['VILCODE'])) + '</td></tr><tr><th scope="row">Traditional Authority</th><td>' + Autolinker.link(String(feature.properties['TANAME'])) + '</td></tr><tr><th scope="row">Trad.Auth. Code</th><td>' + Autolinker.link(String(feature.properties['TACODE'])) + '</td></tr><tr><th scope="row">X Coordinates</th><td>' + Autolinker.link(String(feature.properties['X_COORD'])) + '</td></tr><tr><th scope="row">Y Coordinates</th><td>' + Autolinker.link(String(feature.properties['Y_COORD'])) + '</td></tr></table>';
        layer.bindPopup(popupContent);
                }
                var villagesNSO1998JSON = new L.geoJson(villagesNSO1998,{
                    onEachFeature: pop_villagesNSO1998,
                    pointToLayer: function (feature, latlng) {  
                        return L.circleMarker(latlng, {
                            radius: feature.properties.radius,
                            fillColor: feature.properties.color,
                            color: feature.properties.borderColor,
                            weight: 1,
                            opacity: feature.properties.transp,
                            fillOpacity: feature.properties.transp
                            }).bindLabel(feature.properties.NAME)
                        }
                    });
                    feature_group.addLayer(villagesNSO1998JSON);

                    var cluster_groupvillagesNSO1998JSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
                    cluster_groupvillagesNSO1998JSON.addLayer(villagesNSO1998JSON);
                    cluster_groupvillagesNSO1998JSON.addTo(map);
    
    function pop_nsanjegeonames(feature, layer) {                                    
        var popupContent = '<table><tr><th scope="row">geoname ID</th><td>' + Autolinker.link(String(feature.properties['geonameid'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">ASCII Name</th><td>' + Autolinker.link(String(feature.properties['asciiname'])) + '</td></tr><tr><th scope="row">Alternate Name</th><td>' + Autolinker.link(String(feature.properties['alternaten'])) + '</td></tr><tr><th scope="row">Longitude</th><td>' + Autolinker.link(String(feature.properties['longitude'])) + '</td></tr><tr><th scope="row">Latitude</th><td>' + Autolinker.link(String(feature.properties['latitude'])) + '</td></tr></table>';
        layer.bindPopup(popupContent);
                }           
                var nsanjegeonamesJSON = new L.geoJson(nsanjegeonames,{
                    onEachFeature: pop_nsanjegeonames,
                    pointToLayer: function (feature, latlng) {  
                        return L.circleMarker(latlng, {
                            radius: feature.properties.radius,
                            fillColor: feature.properties.color,
                            color: feature.properties.borderColor,
                            weight: 1,
                            opacity: feature.properties.transp,
                            fillOpacity: feature.properties.transp
                            }).bindLabel(feature.properties.asciiname)
                        }
                    });
                    feature_group.addLayer(nsanjegeonamesJSON);

                    var cluster_groupnsanjegeonamesJSON= new L.MarkerClusterGroup({showCoverageOnHover: false});
            
                    cluster_groupnsanjegeonamesJSON.addLayer(nsanjegeonamesJSON);
                    cluster_groupnsanjegeonamesJSON.addTo(map);
       
        var baseMaps = {
            'OSM HOT': basemap_OSM,
            'OpenTopoMap': basemap_openTopo};
        L.control.layers(baseMaps,{
            "Nsanje District": nsanjedistrictJSON,
            "Marshes (late January 2015)": marsheslateJanuary2015JSON,
            "Flooding (late January 2015)": floodinglateJanuary2015JSON,
            "roads (OSM)": nsanjeosmroadsreprojectedJSON,
            "School Catchment Area (3km)": schoolcatchmentarea3kmJSON,
            "School Catchment Area (5km)": schoolcatchmentarea5kmJSON,
            "Nsanje locations (OSM geonames)": cluster_groupnsanjegeonamesJSON,
            "Villages (NSO 1998)": cluster_groupvillagesNSO1998JSON,
            "Flood Relief Schools": cluster_groupfloodreliefschoolsJSON,
            "Secondary Schools": cluster_groupsecondaryschoolsJSON,
        },{collapsed:true}).addTo(map);

        L.control.scale({options: {
            position: 'bottomleft',
            maxWidth: 100,
            metric: true,
            imperial: false,
            updateWhenIdle: false
        }}).addTo(map);

        map.scrollWheelZoom.disable();