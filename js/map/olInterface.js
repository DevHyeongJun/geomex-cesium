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

   this.getProp = function(key) {        
      return _MAPOBJECT.getProp(key);
   }

   this.setProp = function(key, value) {
         
         _MAPOBJECT.setProp(key, value);

         return _MAPOBJECT.getProp();
   }

   this.getMap = function() {
      return _MAPOBJECT.getMap();
   }

   this.getLayer = function(key){
      return _MAPOBJECT.getLayer(key);
   }

   this.addLayer = function(layer) {
      return _MAPOBJECT.addLayer(layer);
   }

   this.test = function() {

      _MAPOBJECT.getMap().on('postrender', (evt) => {

         if ( _MAPOBJECT.getProp('isTest') ) {
            var getFeature = function(xy) {
               return new ol.Feature({
                   geometry: new ol.geom.LineString(xy)
               });
            }
   
            var center = _MAPOBJECT.getMap().getView().getCenter();
            var centerX = center[0];
            var centerY = center[1];
            
            var size = _MAPOBJECT.getMap().getSize();
            var extent = _MAPOBJECT.getMap().getView().calculateExtent(size);
            
            var minX = extent[0];
            var maxX = extent[2];
            var minY = extent[1];
            var maxY = extent[3];
            
            var north = [centerX, maxY];
            var east = [maxX, centerY] ;
            var south = [centerX, minY] ;
            var west = [minX, centerY] ;
   
            var source = _MAPOBJECT.getLayer('test').getSource();
   
            source.clear();
            source.addFeature(getFeature([center, north]));
            source.addFeature(getFeature([center, south]));
            source.addFeature(getFeature([center, east]));
            source.addFeature(getFeature([center, west]));
         } else {
            var source = _MAPOBJECT.getLayer('test').getSource();
            source.clear();
         }
         
      });
   }
};