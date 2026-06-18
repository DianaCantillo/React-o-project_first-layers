import type OSM from 'ol/source/OSM';
import type { XYZ } from 'ol/source';
import type TileWMS from 'ol/source/TileWMS'; //Se agregó esta linea para que TileWMS sea aceptado en source
import type VectorSource from 'ol/source/Vector';


type LayerType = 'Image' | 'Vector';
type LayerSource = OSM | XYZ | TileWMS | VectorSource

export type LayerData = { //Aqui se define la estructura de cada capa, con sus propiedades y tipos de datos 
// correspondientes. ¿cómo puedo agregar un tipo para source que sea wms, así como xyz?
    name: string;
    type?: LayerType;
    source: LayerSource;
    desc: string;
    opacity: number;
    visible: boolean;
    params?: { [key: string]: string | number | boolean};
    zIndex?: number;
};

export type LayersGroup = {
    groupType: 'checkbox' | 'radio';
    layers: LayerData[];
};