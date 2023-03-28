import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import './Map.css'
import MapChart from "./MapChart";

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
      {showNameOnHover && <ToolTipOnMouse />}
    </div>
  );
}

function ToolTipOnMouse() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Tooltip
      anchorSelect=".country-element"
      position={mousePosition}
      className="map-tooltip"
      classNameArrow="map-tooltip-arrow"
    />
  );
}

export default Map;
