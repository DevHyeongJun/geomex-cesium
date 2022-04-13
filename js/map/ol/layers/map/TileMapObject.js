var TileMapObject = {

    getOSM : () => {
        return  new ol.layer.Tile({
            source: new ol.source.OSM()
        });
    }
};