
//키셋팅
Cesium.Ion.defaultAccessToken = GLOBAL.CESIUM.TOKEN;

function MapCesium(targetId, _OLMAP) {

    this._TARGET_ID = targetId;
    this._MAP;
    this._LAYERS = [];
  
    this.getMap = function() {
        return this._MAP;
    }

    this.addLayer= function(layer) {
        var scene = this._MAP.getCesiumScene();

        scene.primitives.add(layer);
    }

    this.init = function() {
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
          
        this._MAP = new olcs.OLCesium({
            map : _OLMAP.getMap(),
            target : this._TARGET_ID,
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
        this._MAP.setEnabled(true);
        var scene = this._MAP.getCesiumScene();
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

    this.runCamera = function() {
        
    }

    //위경도를 가져온다.
    this.getLatLon = function() {

        ////현재 카메라 위치를 가져옴 : 경위도(라디안), 높이(미터)
        var cartographic = this._MAP.camera.positionCartographic;

        //라디안을 도(경위도) 단위로 변경
        var longitude = Number(Cesium.Math.toDegrees(cartographic.longitude).toFixed(10));
        var latitude = Number(Cesium.Math.toDegrees(cartographic.latitude).toFixed(10));

        return [longitude, latitude];
    }

    this.moveMap = (lon, lat) => {
        this._MAP.camera.position = Cesium.Cartesian3.fromDegrees(lon, lat, 1000);
       // this.MAP.scene.camera.lookAt(target, offset);
    }
}