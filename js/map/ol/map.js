function MapOL(targetId) {

    this._TARGET_ID = targetId;
    this._MAP;
    this._LAYERS = [
    ];

    this._VIEW = 
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
        this._LAYERS.push(layer);
        this._MAP.addLayer(layer);
    }


    this.init = function() {
        this._MAP = new ol.Map(this._MAP_OPTION);
    }

    this.getLatLon = function() {
        
    }

    this.moveMap = function (lat, lon) {
        this._VIEW.setCenter([lat, lon]);
    }
}