import './map.css';
//import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";




const Map = (props) => {
    //const [selectedCountry, setSelectedCountry] = useState(null);
    const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    const handleClick = (geo) => {
        const country = geo.properties.name;
        //setSelectedCountry(country);
        props.submitAnswer(country);
    };

    return (
        <div>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onClick={() => handleClick(geo)}
                                style={{
                                    default: {
                                        fill: "#2a354d",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#2a354d",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#2a354d",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};
export default Map;