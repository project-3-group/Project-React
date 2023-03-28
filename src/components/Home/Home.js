import React, { useRef } from 'react'
import SwitchBar from './SwitchBar'
import CountryCard from './CountryCard'
import Map from '../Map/Map'
import { useState, useEffect } from 'react';
import Facts from './Facts';
import MySwiper from './swiper'

function Home() {
  const [showNameOnHover, setShowNameOnHover] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOverview, setCountryOverview] = useState(null);
  const [facts, setFacts] = useState(null);
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    document.getElementById('country-card')?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const sendRequest = async () => {
      const serverUrl = process.env.REACT_APP_SERVER_URL;
      const response = await fetch(serverUrl + '/allcountry/' + selectedCountry.properties.name);
      const responseData = await response.json();
      setCountryOverview(responseData);
      console.log(responseData);

      const factsResponse = await fetch(serverUrl + '/getFactsbyCountry/' + selectedCountry.properties.name);
      const factsResponseData = await factsResponse.json();
      setFacts(factsResponseData);
      console.log(factsResponseData);
    };

    if (selectedCountry) {
      sendRequest();
    }
  }, [selectedCountry])


  return (
    <>
      <MySwiper />
      {/* <SwitchBar onChange={(checked) => setShowNameOnHover(checked)}/> */}
      <Map onSelectCountry={handleSelectCountry} highlightSelected={true} showNameOnHover={showNameOnHover}/>
      <CountryCard countryData={countryOverview}  />
      <Facts facts={facts} />
    </>
  )
}

export default Home;