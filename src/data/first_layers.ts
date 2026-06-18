//import OSM from 'ol/source/OSM';
import { TileWMS, XYZ } from 'ol/source';
import type { LayerData } from '@/types';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

export const firstLayers: LayerData[] = [
//    {
//        name: 'osm-layer',
//        source: new OSM(),
//        desc: 'Open Street Map',
//        opacity: 1,
//        visible: false,
//        zIndex: 0,
//    },
//    {
//        name: 'geocolor-layer',
//        source: new XYZ({
//            url: 'http://172.29.60.170:81/latest_geocolor.php/{z}/{x}/{-y}.png',
//        }),
//        desc: 'Imágen de satélite',
//        opacity: 0.5,
//        visible: true,
//    },
//    {
//        name: 'estados-layer',
//        source: new XYZ({
//            url: 'http://localhost/tile_layer/edos_mex_white_stroke/{z}/{x}/{y}.png',
//        }),
//        desc: 'Estados',
//        opacity: 1,
//        visible: true,
//        zIndex: 1,
//    },
//    {
//        name: 'divisiones-municipales-layer',
//        source: new XYZ({
//            url: 'http://localhost/tile_layer/entidades_municipios_2024/{z}/{x}/{y}.png',
//        }),
//        desc: 'Divisiones Municipales',
//        opacity: 1,
//        visible: true,
//        zIndex: 0,
//    },
            //Agrego una capa de google earth como ejemplo
        {
            name: 'google-earth-layer',
            type: 'Image',
            source: new XYZ({
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
            }),
            desc: 'Google Earth',
            opacity: 1,
            visible: true,
            zIndex: 0,
        },

        //Agrego los vectores de tormentas. Primero necesito
        // el gejson de cada vector. Para iniciar se agregaron los wms tiles. 
        {
            name: 'municipios-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'mun_bp_v2',
                },
            }),
            desc: 'Municipios',
            opacity: 1,
            visible: true,
        },

        {
            name: 'cono-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'Cono',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Cono',
            opacity: 1,
            visible: true,
        },

        {
            name: 'puntos-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'Puntos',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Puntos',
            opacity: 1,
            visible: true,
        },

        {
            name: 'trayectoria-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'Trayectoria',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Trayectoria',
            opacity: 1,
            visible: true,
        },

        {
            name: 'storms-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'ww_lin_active_storm',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Storms',
            opacity: 1,
            visible: true,
        },

        {
            name: 'radii-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'radii',
                    'VIEWPARAMS': 'type:i',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Radii',
            opacity: 1,
            visible: true,
        },

        {
            name: 'radif-layer',
            source: new TileWMS({
                url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/wms',
                params: {
                    'LAYERS': 'radii',
                    'VIWEWPARAMS': 'type:f',
                    'CQL_FILTER': "storm_id='al012026'"
                },
            }),
            desc: 'Radif',
            opacity: 1,
            visible: true,
        },
        ////Pruebas con el formato ows
        {
                name: 'municipios-ows-layer',
                type: 'Vector',
                source: new VectorSource({
                        url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tropical_cyclone:mun_bp_v2&outputFormat=application/json',
                        format: new GeoJSON(),
                }),
                desc: 'Municipios OWS',
                opacity: 1,
                visible: true,
                zIndex: 2,
        },
        {
            name: 'puntos-ows-layer',
            type: 'Vector',
            source: new VectorSource({
                    url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tropical_cyclone:Puntos&outputFormat=application/json',
                    format: new GeoJSON(),
            }),
            desc: 'Puntos OWS',
            opacity: 1,
            visible: true,
            //zIndex: 2,
        },
        {
            name: 'trayectoria-ows-layer',
            type: 'Vector',
            source: new VectorSource({
                    url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tropical_cyclone:trayectoria&outputFormat=application/json',
                    format: new GeoJSON(),
            }),
            desc: 'Trayectoria OWS',
            opacity: 1,
            visible: true,
            zIndex: 2,
        },
        {
            name: 'cono-ows-layer',
            type: 'Vector',
            source: new VectorSource({
                    url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tropical_cyclone:cono&outputFormat=application/json',
                    format: new GeoJSON(),
            }),
            desc: 'Cono OWS',
            opacity: 1,
            visible: true,
            zIndex: 2,
        },
        {
            name: 'radii-ows-layer',
            type: 'Vector',
            source: new VectorSource({
                    url: 'http://172.29.60.170:8080/geoserver/tropical_cyclone/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tropical_cyclone:radii&outputFormat=application/json',
                    format: new GeoJSON(),
            }),
            desc: 'Radii OWS',
            opacity: 1,
            visible: true,
            zIndex: 2,
        }
        

];
