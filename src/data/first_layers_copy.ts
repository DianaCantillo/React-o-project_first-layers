import OSM from 'ol/source/OSM';
import { XYZ } from 'ol/source';
import type { LayersGroup } from '../types';


export const firstLayers: LayersGroup =
{
    groupType: 'checkbox',
    layers: [
        {
            name: 'osm-layer',
            type: 'Image',
            source: new OSM(),
            desc: 'Open Street Map',
            opacity: 1,
            visible: false,
            zIndex: 0,
        },
        {
            name: 'geocolor-layer',
            type: 'Image',
            source: new XYZ({
                url: 'http://172.29.60.170:81/latest_geocolor.php/{z}/{x}/{-y}.png',
            }),
            desc: 'Satellite Imagery',
            opacity: 0.5,
            visible: true,
        },
        {
            name: 'estados-layer',
            source: new XYZ({
                url: 'http://172.29.60.18/tile_layer/edos_mex_white_stroke/{z}/{x}/{y}.png',
            }),
            desc: 'Estados',
            opacity: 1,
            visible: true,
            zIndex: 1,
        },
        {
            name: 'divisiones-municipales-layer',
            source: new XYZ({
                url: 'http://172.29.60.18/tile_layer/entidades_municipios_2024/{z}/{x}/{y}.png',
            }),
            desc: 'Divisiones Municipales',
            opacity: 1,
            visible: true,
            zIndex: 0,
        },
    ],
}
