import './MapChart.css';
import React, { memo, useRef, useState } from "react";
//import ReactDOM from "react-dom";
import { Sphere, ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import { MdZoomInMap, MdZoomOutMap, MdRestartAlt } from 'react-icons/md'

const Map = ({ props,submitAnswer, onSelectCountry, highlightSelected }) => {
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    const lastSelected = useRef(null)

    const handleOnClick = (e, geo) => {
        if (onSelectCountry) onSelectCountry(geo);

        if (highlightSelected) {
            e.target.classList.add("path-clicked");
            lastSelected.current?.classList.remove('path-clicked')
            lastSelected.current = e.target;
        }
    };

    function handleZoomIn() {
        if (position.zoom >= 2) return;
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




    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    const handleClick = (geo) => {
        const country = geo.properties.name;
        console.log(country);
        submitAnswer(country);

    };

    return (
        <div className="map-chart" width={1000} height={400}>
            <ComposableMap width={1000} height={400} projectionConfig={{ rotate: [-10, 0, 0], scale: 147, }}>
                <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                    <Sphere stroke="#000" strokeWidth={0.3} className="sphere-path" />
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    className="country-element"
                                    data-tooltip-content={geo.properties.name}
                                    onClick={() => handleClick(geo)}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <div className="map-btn-container">
                <MdZoomInMap className="map-btn map-btn-minus" onClick={handleZoomOut} />
                {/* <button className="map-btn map-btn-minus" onClick={handleZoomOut}>-</button> */}
                {/* <button className="map-btn map-btn-plus" onClick={handleZoomIn}>+</button> */}
                <MdZoomOutMap className="map-btn map-btn-plus" onClick={handleZoomIn} />
                {/* <button className="map-btn map-btn-minus" onClick={handleResetPosition}>Reset</button> */}
                <MdRestartAlt className="map-btn map-btn-minus" onClick={handleResetPosition} />
            </div>
        </div>
    );
};
export default Map;