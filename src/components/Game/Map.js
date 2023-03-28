import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MapChart from "./MapChart";

function Map({ props,submitAnswer, onSelectCountry, highlightSelected, showNameOnHover = true }) {
    return (
      <div>
        <MapChart
          onSelectCountry={onSelectCountry}
          highlightSelected={highlightSelected}
          submitAnswer={submitAnswer}
        />
        {showNameOnHover && <Tooltip anchorSelect=".country-element" />}
      </div>
    );
  }
export default Map;