import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MapChart from "./MapChart";
import { useEffect, useState } from "react";


function Map({
  onSelectCountry,
  highlightSelected,
  showNameOnHoverDef = true,
}) {
  const [showNameOnHover, setShowNameOnHover] = useState(showNameOnHoverDef);

  const toggleShowNameOnHover = () => setShowNameOnHover(!showNameOnHover);
  return (
    <div>
      <MapChart
        onSelectCountry={onSelectCountry}
        highlightSelected={highlightSelected}
        toggleShowNameOnHover={toggleShowNameOnHover}
        showNameOnHover={showNameOnHover}
      />
      {showNameOnHover && <ToolTipOnMouse/>}
    </div>
  );
}

function ToolTipOnMouse() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = event => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove' , handleMouseMove)
  
    return () => {
      document.removeEventListener('mousemove' , handleMouseMove)

    }
  }, [])
  

  return (
    <Tooltip
      anchorSelect=".country-element"
      position={mousePosition}
    />
  );
}

export default Map;
