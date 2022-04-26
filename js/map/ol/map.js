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
            zoom: 12,
            minZoom : 7,
            maxZoom : 20
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

        /**
        * @param {number} resolution Resolution.
        * @param {string} units Units
        * @param {boolean=} opt_round Whether to round the scale or not.
        * @return {number} Scale
        */
       var getScaleFromResolution = function(resolution, units, opt_round) {
         var scale = INCHES_PER_UNIT[units] * DOTS_PER_INCH * resolution;
         if (opt_round) {
           scale = Math.round(scale);
         }
         return scale;
       };

        var _this = this;
        //지도 동기화
        this._MAP.on('postrender', function(evt) {
            var latlon = _this.getLatLon();
            var resolution = _this._MAP.getView().getResolution();
            var units = _this._MAP.getView().getProjection().getUnits();
            
            var z = _this.getScaleFromResolution(resolution, units);
            console.log(resolution, units, z);
            CESIUMMAP.setCenter(latlon[0], latlon[1], z);
        });
    }

    this.getLatLon = function() {
        return ol.proj.toLonLat(this._MAP.getView().getCenter());
    }

    this.moveMap = function (lat, lon) {
        this._VIEW.setCenter([lat, lon]);
    }

    this.getScaleFromResolution = function(resolution, units, opt_round) {
        var INCHES_PER_UNIT = {
            'm': 39.37,
            'dd': 4374754
        };
        var DOTS_PER_INCH = 72;
        
        var scale = INCHES_PER_UNIT[units] * DOTS_PER_INCH * (resolution);
       // if (opt_round) {
            scale = Math.round(scale);
       // }
        return scale;
    };
}