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
            target : targetId
            , layer : this.LAYERS
            , view: this.VIEW
        }
    }

    getMap() {
        return this.MAP;
    }

    addLayer(layer) {
        this.LAYERS.push(layer);
        this.MAP.addLayer(layer);
    }

    createMap() {
        
        this.MAP = new ol.Map(this.mapOpt);
        this.addLayer(TileMapObject.getOSM());
        //Cesium.Ion.defaultAccessToken = OLCS_ION_TOKEN;
        //세슘의 ol3 입히는법
        // const ol3d = new olcs.OLCesium({map: this.MAP});
        // var scene = ol3d.getCesiumScene();
        // scene.terrainProvider = Cesium.createWorldTerrain();
        // ol3d.setEnabled(true);

     //   var ol3d = new olcs.OLCesium({map : this.MAINMAP, target :'map3d'});

        //안쓰면 카메라 갱신이 안된다. 
      //  var scene = ol3d.getCesiumScene();
        //활성화 시킴
      //  ol3d.setEnabled(true);
      //  ol3d.scene.primitives.add(Cesium.createOsmBuildings());

/*
        const scene = ol3d.getCesiumScene();
        scene.terrainProvider = Cesium.createWorldTerrain();
        
        //마우스 이동 이벤트 
        this.MAP.on('POINTERMOVE', (evt) => {
            const latlon = ol.proj.toLonLat(this.MAP.getView().getCenter());

            CESIUMMAP.moveMap(latlon[0], latlon[1]);
        });
*/
        // this.MAP.on('postrender', (evt) => {
        //     const latlon = ol.proj.toLonLat(this.MAP.getView().getCenter());

        //     CESIUMMAP.moveMap(latlon[0], latlon[1]);
        // });

        return this;
        
    }

    getLatLon = () => {
        
    }

    moveMap = (lat, lon) => {
        this.VIEW.setCenter([lat, lon]);
    }
}