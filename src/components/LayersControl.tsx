
// import { useLayerControls } from "../hooks/useLayerControls";
import { useLayerControls } from "@/hooks/useLayerControls";
import { Input, Label } from "./ui";

type LayersControlProps = {
    layerName: string;
    layerDesc: string;
    opacity: number;
    visibility: boolean;
}

const LayersControl = ({ layerName, layerDesc, opacity, visibility }
    : LayersControlProps) => {
    const { layerOpacity, layerVisibility, toggleLayerVisibility, handleOpacityChange } = useLayerControls(layerName, opacity, visibility);
    return (
        <div className="flex items-center justify-between p-0 border-b border-gray-100">
            <Label> <strong>{layerDesc}</strong>
            </Label>
            <Input
                type="checkbox"
                checked={layerVisibility}
                onChange={toggleLayerVisibility}
            />
            <Input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={layerOpacity}
                onChange={handleOpacityChange}
            />
            <Label >{`${layerOpacity * 100} %`}</Label>
        </div>
    )
}

export default LayersControl