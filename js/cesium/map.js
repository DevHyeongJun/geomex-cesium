
//키셋팅
Cesium.Ion.defaultAccessToken = GLOBAL.CESIUM.TOKEN;

class MapCesium {

    constructor(targetId) {
        this.targetId = targetId;
        this.MAP;
        this.LAYERS = [];
        
        //초기 레이어 생성
        //null

        //지도 초기 옵션 생성
        // this.mapOpt = {
        //     target : this.targetId
        //     , layer : this.LAYERS
        //     , view: new ol.View({
        //         center: ol.proj.fromLonLat([126.97806, 37.56667]),
        //         zoom: 15
        //     })
        // }
    }

    getMap() {
        return this.MAP;
    }

    addLayer(layer) {
        const scene = this.MAP.getCesiumScene();

        scene.primitives.add(layer);
    }

    createMap = () => {
        // this.MAP =  new Cesium.Viewer(this.targetId, {
        //     requestRenderMode: true,
        //     maximumRenderTimeChange: Infinity,
        //     timeline: false,
        //     animation: false,
        //     baseLayerPicker: false,
        //     sceneModePicker: false,
        //     terrainProvider: Cesium.createWorldTerrain(),
        //     imageryProvider: Cesium.createWorldImagery()
        // });

        this.MAP = new olcs.OLCesium({
            map : MAINMAP.getMap(), 
            target :'cesiumMap',
            requestRenderMode: true,
            maximumRenderTimeChange: Infinity,
            timeline: false,
            animation: false,
            baseLayerPicker: false,
            sceneModePicker: false,
            terrainProvider: Cesium.createWorldTerrain(),
            imageryProvider: Cesium.createWorldImagery()
        });

     //   var ol3d = new olcs.OLCesium({map : this.MAINMAP, target :'map3d'});

        //안쓰면 카메라 갱신이 안된다. 
        
        //활성화 시킴
        this.MAP.setEnabled(true);
        const scene = this.MAP.getCesiumScene();
        //scene 추가 > scene = layer? 또는 어떠한 객체
        //지형 객체 생성
        scene.terrainProvider = Cesium.createWorldTerrain();
        
        //건물 객체 추가.
        this.addLayer(Cesium.createOsmBuildings());
        
       // scene.globe.depthTestAgainstTerrain = true;
        //카메라 강제 이동
        // this.MAP.camera.flyTo({
        //     destination : Cesium.Cartesian3.fromDegrees(GLOBAL.MAP.OPTION.INIT_LON, GLOBAL.MAP.OPTION.INIT_LAT, 1000),
        //     orientation : {
        //       heading : Cesium.Math.toRadians(0.0),
        //       pitch : Cesium.Math.toRadians(-15.0),
        //     }
        // });

        return this;
        
    }

    //위경도를 가져온다.
    getLatLon = () => {

        ////현재 카메라 위치를 가져옴 : 경위도(라디안), 높이(미터)
        const cartographic = this.MAP.camera.positionCartographic;

        //라디안을 도(경위도) 단위로 변경
        const longitude = Number(Cesium.Math.toDegrees(cartographic.longitude).toFixed(10));
        const latitude = Number(Cesium.Math.toDegrees(cartographic.latitude).toFixed(10));
    }

    moveMap = (lon, lat) => {
        this.MAP.camera.position = Cesium.Cartesian3.fromDegrees(lon, lat, 1000);
       // this.MAP.scene.camera.lookAt(target, offset);
    }
}