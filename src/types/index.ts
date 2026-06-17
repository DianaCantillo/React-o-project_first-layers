import type OSM from 'ol/source/OSM';
import type { XYZ } from 'ol/source';

type LayerType = 'Image' | 'Vector';
type LayerSource = OSM | XYZ;

export type LayerData = {
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