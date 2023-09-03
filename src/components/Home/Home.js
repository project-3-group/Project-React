import React, { useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import SwitchBar from "./SwitchBar";
import CountryCard from "./CountryCard";
import Map from "../Map/Map";
import { useState, useEffect } from "react";
import Facts from "./Facts";
import MySwiper from "./swiper";
import Overview from "./Overview";
import MapScroll from "./MapScroll";
import { MdAod } from "react-icons/md";
import countryData from "../../assets/country-data.json";

function Home() {
  const [showNameOnHover, setShowNameOnHover] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOverview, setCountryOverview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [facts, setFacts] = useState(null);
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    document.getElementById("con-info")?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);
      const { responseData, factsResponseData } = await getCountryInfo(selectedCountry);

      setCountryOverview(responseData);
      setFacts(factsResponseData);
      setLoading(false);
      console.log(factsResponseData);
    };

    if (selectedCountry) {
      sendRequest();
    }
  }, [selectedCountry]);

  return (
    <>
      <MySwiper />
      {/* <SwitchBar onChange={(checked) => setShowNameOnHover(checked)}/> */}
      <div id="MapId">
        <Map
          onSelectCountry={handleSelectCountry}
          highlightSelected={true}
          showNameOnHover={showNameOnHover}
        />
      </div>
      {loading ? (
        <div className="spinner-container" id="con-info">
          <Spinner animation="grow" cla />
        </div>
      ) : (
        <>
          <CountryCard countryData={countryOverview} />
          <Facts facts={facts} />
          <MapScroll />
        </>
      )}
    </>
  );
}

export default Home;

async function getCountryInfo(selectedCountry) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  // const response = await fetch(serverUrl + '/allcountry/alpha/' + selectedCountry.id)
  // const responseData = await response.json()
  let factsResponseData = null;
  try {
    const factsResponse = await fetch(serverUrl + "/getFactsbyCountry/alpha/" + selectedCountry.id);
    factsResponseData = await factsResponse.json();
  } catch (err) {
    console.log(err);
  }

  const responseData = countryData.find((country) => country.cca3 === selectedCountry.id);
  return { responseData, factsResponseData };
}
