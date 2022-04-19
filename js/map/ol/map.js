function MapOL(targetId) {

    this._TARGET_ID = targetId;
    this._MAP;
    this._LAYERS = [];

    this._prop = {
        isTest : false
    }
    
    this.getProp = function(key) {        
        return this._prop[key];
    }

    this.setProp = function(key, value) {
        
        this._prop[key] = value;

        return this._prop;
    }

    //초기 레이어 생성
    //null jd

    //지도 초기 옵션 생성
    this._MAP_OPTION = {
        target : targetId
        , layer : []
        , view: new ol.View({
            center: ol.proj.fromLonLat([GLOBAL.MAP.OPTION.INIT_LON, GLOBAL.MAP.OPTION.INIT_LAT]),
            zoom: 15
        })
    }
    
    this.getMap = function() {
        return this._MAP;
    }

    this.addLayer = function(layer) {
        //this._LAYERS.push(layer);
        this._MAP.addLayer(layer);
    }

    this.getLayer = function(key) {
        var layers = this._MAP.getLayers().getArray();

        for ( var i in layers ) {
            var layer = layers[i];
            var id = layer.getProperties().id;
            if ( id && id === key ) {
                return layer;
            }
        }
    }

    this.init = function() {

        this._MAP = new ol.Map(this._MAP_OPTION);

        this.addLayer(new ol.layer.Vector({
            id : 'test',
            zIndex: 99999,
            source : new ol.source.Vector(),
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 4
                })
            })
        }));        
    }

    this.getLatLon = function() {
        
    }

    this.moveMap = function (lat, lon) {
        this._VIEW.setCenter([lat, lon]);
    }
}