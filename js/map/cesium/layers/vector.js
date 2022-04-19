
var CesiumLayer = {

    /**
     * 포인트 생성
     */
    createPoint : function(lon, lat, style) {

        var opt = {position : Cesium.Cartesian3.fromDegrees(lon, lat)};

        Object.assign(opt, {point: style});

        return {
            position : Cesium.Cartesian3.fromDegrees(lon, lat),
            point : {
                color :  style.color,
                pixelSize : style.pixelSize,
            }
        }
    },

    /**
     * 라인 생성
     */
    createLine : function(lonlats, style) {
        var positions = [];

        for ( var i in lonlats ) {
            var lonlat = lonlats[i];

            positions.push(Cesium.Cartesian3.fromDegrees(lonlat[0], lonlat[1]));
        }
        
        var opt = {polyline : { positions : positions, clampToGround : true } };

        Object.assign(opt.polyline, style);
   new Cesium.Material
        return opt;
    },

    /**
     * 폴리곤 생성
     */
     createPolyon : function() {
        return {
            position : Cesium.Cartesian3.fromDegrees(lon, lat),
            point : {
                color : 'red',
                pixelSize : 10
            }
        }
    }
}