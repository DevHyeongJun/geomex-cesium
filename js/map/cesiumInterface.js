/**
 *  맵 객체 use 함수만 구현한다.
 *  - 사용
 *  - 해당 소스는 혹...시 모르니 ES5로 구현하였다.
 *  - "필요한 함수"만 직접 구현한다.
 */
 var UseMapCesium = function(_MAPOBJECT){

    this.init = function() {
        return _MAPOBJECT.init();
    }

    this.getMap = function() {
        return _MAPOBJECT.getMap();
    }

    this.getProp = function(key) {        
        return _MAPOBJECT.getProp(key);
    }

    this.setProp = function(key, value) {

        _MAPOBJECT.setProp(key, value);

        return _MAPOBJECT.getProp();
    }

    this.getCenter = function() {
        return _MAPOBJECT.getCenter();
    }

    this.addLayer = function(layer) {
        _MAPOBJECT.addLayer(layer);
    }

    this.moveCamera = function(KeyCode, rate) {

        switch(KeyCode) {
            case 87 :
                //w
                _MAPOBJECT.moveCamera('up', rate);
                break;
            case 83 :
                //s
                _MAPOBJECT.moveCamera('down', rate);
                break;
            case 65 :
                //a
                _MAPOBJECT.moveCamera('left', rate);
                break;
            case 68 :
                //d
                _MAPOBJECT.moveCamera('right', rate);
                break;
            case 81 :
                //q
                _MAPOBJECT.moveCamera('forward', rate);
                break;
            case 69 :
                //e
                _MAPOBJECT.moveCamera('backward', rate);
                break;
        }
    }

};
