
//키셋팅
Cesium.Ion.defaultAccessToken = GLOBAL.CESIUM.TOKEN;

/**
 * 세슘 객체 생성 및 모듈 구현
 * 
 *  - camara = roll : 기울기, pan : 좌우 회전, Tilt 상하 회전
 *  - 
 *  - 
 * @param {*} targetId 
 * @param {*} _OLMAP 
 */
function MapCesium(targetId, _OLMAP) {

    this._TARGET_ID = targetId;
    this._MAP;
    this._LAYERS = [];
  
    this._INIT_CAMERA_RATE = 100;
    this.getMap = function() {
        return this._MAP;
    }

    this._prop = {
        isMoveCamera : false
    }
    
    this.getProp = function(key) {        
        return this._prop[key];
    }

    this.setProp = function(key, value) {
        
        this._prop[key] = value;

        return this._prop;
    }
    
    this.addLayer = function(layer) {
        
        var entities = this._MAP.getDataSourceDisplay().defaultDataSource.entities;
        
        entities.add(layer);

    }

    this.init = function() {
        this._MAP =  new Cesium.Viewer(this._TARGET_ID, {
            requestRenderMode: true,
            maximumRenderTimeChange: Infinity,
            timeline: false,
            animation: false,
            baseLayerPicker: false,
            sceneModePicker: false,
            terrainProvider: Cesium.createWorldTerrain(),
            imageryProvider: Cesium.createWorldImagery()
        });

        //활성화 시킴
       // this._MAP.setEnabled(true);
        //var scene = this._MAP.getCesiumScene();
        //scene 추가 > scene = layer? 또는 어떠한 객체
        
       // scene.globe.depthTestAgainstTerrain = true;
        //카메라 강제 이동
        this._MAP.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(GLOBAL.MAP.OPTION.INIT_LON, GLOBAL.MAP.OPTION.INIT_LAT, 3148.2129058485157),
            pitch : 0 ,//Cesium.Math.toRadians(-15.0),
            roll : 0
        });

        return this;
        
    }

    this.runCamera = function() {
        CESIUMMAP.getMap().getCamera().setTilt(0)
    }
    
    this.initPosition = function(x, y) {
        var camara = Cesium.Cartesian3.fromDegrees(x, y, 1000);
      //  this._MAP.getCamera().setDistance(3148.2129058485157);
      //  this._MAP.getCamera().setCenter(Cesium.Cartesian3.fromDegrees(x, y, 1000));
        CESIUMMAP.getMap().camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(x, y, 3148.2129058485157)
            , pitch:0
        });
    }
    
    //카메라를 중앙으로 이동 시킨다. 
    this.setCenter = function(x, y, z) {
        //3148.2129058485157        

        var cartographic = new Cesium.Cartographic();
        var ellipsoid = this._MAP.scene.mapProjection.ellipsoid;
        ellipsoid.cartesianToCartographic(this._MAP.camera.positionWC, cartographic);
        console.log(cartographic.height, z);
        
        CESIUMMAP.getMap().camera.flyTo({
           destination : Cesium.Cartesian3.fromDegrees(x, y, z)
        });

    }


    //위경도를 가져온다.
    this.getCenter = function() {

        ////현재 카메라 위치를 가져옴 : 경위도(라디안), 높이(미터)
        var camera = CESIUMMAP.getMap().camera_;
        var position = camera.getPosition();
        //라디안을 도(경위도) 단위로 변경
       // var longitude = Number(Cesium.Math.toDegrees(cartographic.longitude).toFixed(10));
        //var latitude = Number(Cesium.Math.toDegrees(cartographic.latitude).toFixed(10));
        
        return CESIUMMAP.getMap().camera_.toLonLat_(position);
    }

    this.moveMap = function(lon, lat) {
        this._MAP.camera.position = Cesium.Cartesian3.fromDegrees(lon, lat, 3148.2129058485157);
       // this.MAP.scene.camera.lookAt(target, offset);
    }
   
    /**
     * ptz 제어
     * @param {*} move 
     * @param {*} rate 
     */
    this.moveCamera = function( move, rate ) {

        if (!this._prop.isMoveCamera) return;
        if (!rate) rate = this._INIT_CAMERA_RATE ;
        
        var camera = this._MAP.getCamera().cam_;
        var ellipsoid = this._MAP.getCesiumScene().globe.ellipsoid;

        var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
        var moveRate = cameraHeight / rate;

        switch(move) {
            case "forward" :
                camera.moveForward(moveRate);
                break;
            case "backward" :
                camera.moveBackward(moveRate);
                break;
            case "left" :
                camera.moveLeft(moveRate);
                break;
            case "right" :
                camera.moveRight(moveRate);
                break;
            case "up" :
                camera.moveUp(moveRate);
                break;
            case "down" :
                camera.moveDown(moveRate);
                break;

        }
    }
}