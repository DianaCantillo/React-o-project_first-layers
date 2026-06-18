import { TileLayer, VectorLayer } from "react-openlayers"
import type { LayerData } from '@/types';

const LayerMap = (layer: LayerData) => {
  if (layer.type === 'Vector') {
    return (
      <VectorLayer
        key={layer.name}
        source={layer.source}
        name={layer.name}
        opacity={layer.opacity}
        visible={layer.visible}
        zIndex={layer.zIndex}
      />
    )
  }

  return (
    <TileLayer
      key={layer.name}
      source={layer.source}
      name={layer.name}
      opacity={layer.opacity}
      visible={layer.visible}
      zIndex={layer.zIndex}
    />
  )
}
export default LayerMap;