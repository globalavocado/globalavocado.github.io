var map, select;

function init(){
    var options = {
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: new OpenLayers.Projection("EPSG:4326")
    };
    map = new OpenLayers.Map('map', options);
    
    var mapnik = new OpenLayers.Layer.OSM("OpenStreetMap (Mapnik)");
    
    var brandenburg = new OpenLayers.Layer.Vector("Brandenburg borders", {
   projection: map.displayProjection,                
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
            url: "./data/Brandenburg.kml",
            format: new OpenLayers.Format.KML({
                extractStyles: true,
                extractAttributes: true,
                maxDepth: 2
            })
        })
    });
    
var krugerstyles = new OpenLayers.StyleMap(OpenLayers.Util.applyDefaults(
{fillColor: "orange", fillOpacity: 1, strokeColor: "black", pointRadius: 4},
OpenLayers.Feature.Vector.style["default"]));

var schmidtstyles = new OpenLayers.StyleMap(OpenLayers.Util.applyDefaults(
{fillColor: "red", fillOpacity: 1, strokeColor: "black", pointRadius: 4},
OpenLayers.Feature.Vector.style["default"]));
    
   var kruger = new OpenLayers.Layer.Vector("Kr&uuml;ger variants", {
      styleMap : krugerstyles,
       projection: map.displayProjection,
       strategies: [new OpenLayers.Strategy.Fixed()],
       protocol: new OpenLayers.Protocol.HTTP({
           url: "./data/Kruger.kml",
           format: new OpenLayers.Format.KML({
        extractStyles: false,                       
               extractAttributes: true
           })
       })
    });

 var schmidt = new OpenLayers.Layer.Vector("Schmidt variants", {
      styleMap : schmidtstyles,
       projection: map.displayProjection,
       strategies: [new OpenLayers.Strategy.Fixed()],
       protocol: new OpenLayers.Protocol.HTTP({
           url: "./data/Schmidt.kml",
           format: new OpenLayers.Format.KML({
        extractStyles: false,                       
               extractAttributes: true
           })
       })
    });
    
    map.addLayers([mapnik, brandenburg, kruger, schmidt]);

    select = new OpenLayers.Control.SelectFeature([kruger, schmidt]);
   
  kruger.events.on({
        "featureselected": onFeatureSelect,
        "featureunselected": onFeatureUnselect
    });
    
schmidt.events.on({
        "featureselected": onFeatureSelect,
        "featureunselected": onFeatureUnselect
    });            
    
    map.addControl(select);
    select.activate();   

    map.addControl(new OpenLayers.Control.LayerSwitcher());

    map.zoomToExtent(
        new OpenLayers.Bounds(
            13.996, 52.600, 15.358, 53.149
        ).transform(map.displayProjection, map.projection)
    );
}
function onPopupClose(evt) {
    select.unselectAll();
}
function onFeatureSelect(event) {
    var feature = event.feature;
    var selectedFeature = feature;
    var popup = new OpenLayers.Popup.FramedCloud("chicken", 
        feature.geometry.getBounds().getCenterLonLat(),
        new OpenLayers.Size(100,100),
        "<h2>"+feature.attributes.name + "</h2>" + feature.attributes.description,
        null, true, onPopupClose
    );
    feature.popup = popup;
    map.addPopup(popup);
}
function onFeatureUnselect(event) {
    var feature = event.feature;
    if(feature.popup) {
        map.removePopup(feature.popup);
        feature.popup.destroy();
        delete feature.popup;
    }
}