var MapOL = function(targetId) {

    var _TARGET_ID = targetId;
    var _MAP;
    var _LAYERS = [
        TileMapObject.getOSM()
    ];

    var _VIEW = new ol.View({
        center: ol.proj.fromLonLat([GLOBAL.MAP.OPTION.INIT_LON, GLOBAL.MAP.OPTION.INIT_LAT]),
        zoom: 15
    });
    //초기 레이어 생성
    //null jd

    //지도 초기 옵션 생성
    var _MAP_OPTION = {
        target : _TARGET_ID
        , layer : _LAYERS
        , view: _VIEW
    }
    
    this.getMap = function() {
        return _MAP;
    }

    this.addLayer = function(layer) {
        _LAYERS.push(layer);
        _MAP.addLayer(layer);
    }


    MapOL.prototype.init = function() {
        _MAP = new ol.Map(_MAP_OPTION);
    }

    this.getLatLon = function() {
        
    }

    this.moveMap = function (lat, lon) {
        _VIEW.setCenter([lat, lon]);
    }
}