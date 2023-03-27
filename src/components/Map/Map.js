import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MapChart from "./MapChart";

function Map({ onSelectCountry, highlightSelected,showNameOnHover = true }) {
  return (
    <div>
      <MapChart
        onSelectCountry={onSelectCountry}
        highlightSelected={highlightSelected}
      />
      {showNameOnHover && <Tooltip anchorSelect=".country-element" />}
    </div>
  );
}
export default Map;
