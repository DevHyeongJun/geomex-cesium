/**
 *  맵 객체 use 함수만 구현한다.
 *  - 사용
 *  - 해당 소스는 혹...시 모르니 ES5로 구현하였다.
 *  - "필요한 함수"만 직접 구현한다.
 */
 function UseMapOL(_MAPOBJECT) {
   
   this.init = function() {
      return _MAPOBJECT.init();
   }

   this.getMap = function() {
      return _MAPOBJECT.getMap();
   }

   this.addLayer = function(layer) {
      return _MAPOBJECT.addLayer(layer);
   }
};