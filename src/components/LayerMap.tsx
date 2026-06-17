import { TileLayer } from "react-openlayers"
import type { LayerData } from '@/types';

const LayerMap = (layer: LayerData) => {

  return (
    <TileLayer
      key={layer.name}
      {...layer}
      
    />
  )
}
export default LayerMap;