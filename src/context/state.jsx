
import React, { useState, useContext, createContext } from "react";
import axios from 'axios';

const StateContext = createContext();

const geoNamesUserKey = process.env.REACT_APP_USERNAME;

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [country, setCountry] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [countryNeighbors, setCountryNeighbors] = useState([]);

    const getCountryList = async () => {
        const url = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en";
        const params = '&username=' + geoNamesUserKey;
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            setCountryList(response.data.geonames);
        } catch (error) {
            console.error(error);
        }
    }

    const getCountry = async (countryCode) => {
      const url = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en";
      const params = '&' + countryCode + '&username=' + geoNamesUserKey;
      const endPoint = url + params;

      try {
          const response = await axios.get(endPoint);
          setCountry(response.data.geonames);
      } catch (error) {
          console.error(error);
      }
    }

    const getCountryNeighbors = async (countryCode) => {
      const url = "http://api.geonames.org/neighboursJSON?formatted=true&lang=en&country=";
      const params = countryCode + '&username=' + geoNamesUserKey;
      const endPoint = url + params;

      try {
          const response = await axios.get(endPoint);
          setCountryNeighbors(response.data.geonames);
      } catch (error) {
          console.error(error);
      }
    }

    const defaultContext = {
        country,
        countryList,
        countryNeighbors,
        getCountryList,
        getCountry,
        getCountryNeighbors,
        setCountry
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };