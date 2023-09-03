import React, { memo, useRef, useState } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import { MdZoomInMap, MdZoomOutMap, MdRestartAlt } from "react-icons/md";
import { TbMessageOff, TbMessageLanguage } from "react-icons/tb";
import data from "../../assets/world-countries.json";
import "./MapChart.css";
import { Tooltip } from "react-tooltip";

const MapChart = ({
  onSelectCountry,
  highlightSelected,
  toggleShowNameOnHover,
  showNameOnHover,
}) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const lastSelected = useRef(null);

  const handleOnClick = (e, geo) => {
    console.log(geo);
    if (onSelectCountry) onSelectCountry(geo);

    if (highlightSelected) {
      e.target.classList.add("path-clicked");
      lastSelected.current?.classList.remove("path-clicked");
      lastSelected.current = e.target;
    }
  };

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleResetPosition() {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <div className="map-chart">
      <ComposableMap
        width={900}
        height={400}
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        viewBox="0 7 900 387"
      >
        <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
          <Geographies geography={data}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="country-element"
                  data-tooltip-content={geo.properties.name}
                  onClick={(e) => handleOnClick(e, geo)}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <div className="map-btn-container">
        <Tooltip id="btn-tooltip" delayShow={1000} />
        <MdZoomInMap
          className="map-btn map-btn-minus"
          onClick={handleZoomOut}
          data-tooltip-id="btn-tooltip"
          data-tooltip-content="Zoom In"
        />

        <MdZoomOutMap
          className="map-btn map-btn-plus"
          onClick={handleZoomIn}
          data-tooltip-id="btn-tooltip"
          data-tooltip-content="Zoom Out"
        />

        <MdRestartAlt
          className="map-btn map-btn-minus"
          onClick={handleResetPosition}
          data-tooltip-id="btn-tooltip"
          data-tooltip-content="Reset Zoom"
        />

        {showNameOnHover ? (
          <TbMessageLanguage
            className={"map-btn map-btn-show "}
            onClick={toggleShowNameOnHover}
            data-tooltip-id="btn-tooltip"
            data-tooltip-content="Hide Name On Hover"
          />
        ) : (
          <TbMessageOff
            className={"map-btn map-btn-show "}
            onClick={toggleShowNameOnHover}
            data-tooltip-id="btn-tooltip"
            data-tooltip-content="Show Name On Hover"
          />
        )}
      </div>
    </div>
  );
};

export default memo(MapChart);
