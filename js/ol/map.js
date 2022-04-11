class MapOL {

    constructor(targetId) {
        this.targetId = targetId;
        this.MAP;
        this.LAYERS = [];
        this.VIEW = new ol.View({
            center: ol.proj.fromLonLat([GLOBAL.MAP.OPTION.INIT_LON, GLOBAL.MAP.OPTION.INIT_LAT]),
            zoom: 15
        });
        //초기 레이어 생성
        //null jd

        //지도 초기 옵션 생성
        this.mapOpt = {
            target : this.targetId
            , layer : this.LAYERS
            , view: this.VIEW
        }
    }

    createMap() {
        
        this.MAP = new ol.Map(this.mapOpt);
        this.MAP.addLayer(TileMapObject.getOSM());
     
        //마우스 이동 이벤트 
        this.MAP.on('postrender', (evt) => {
            const latlon = ol.proj.toLonLat(this.MAP.getView().getCenter());

            CESIUMMAP.moveMap(latlon[0], latlon[1]);
        });

        return this;
        
    }

    getLatLon = () => {

    }

    moveMap = (lat, lon) => {
        this.VIEW.setCenter([lat, lon]);
    }
}