import LayersControl from './LayersControl';
import type { LayerData } from '@/types';   

const Sidebar = ({ layers }: { layers: LayerData[] }) => {
    
    return (
        <div>
            {layers.map(layer => (
                <div key={layer.name}>
                    <LayersControl layerName={layer.name} layerDesc={layer.desc} opacity={layer.opacity} visibility={layer.visible} />
                </div>
            ))}
        </div>
    )
}

export default Sidebar;