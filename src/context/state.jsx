
import React, { useState, useContext, createContext } from "react";
import axios from 'axios';
import * as secrets from '../secrets.json';
import _ from 'lodash';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [country, setCountry] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [countryNeighbors, setCountryNeighbors] = useState([]);

    const getCountryList = async () => {
        const url = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en";
        const params = '&username=' + secrets.geonames.username;
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
      const params = '&' + countryCode + '&username=' + secrets.geonames.username;
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
      const params = countryCode + '&username=' + secrets.geonames.username;
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


/*
// gets country listing
demo.factory('list', function($http){
    return function(){
      return $http ({ 
        cache: true,
        method: 'JSONP', 
        url: urlPath,
        params: {callback: 'JSON_CALLBACK'}
      })
    };
  }); // end of list
  // gets capital population
  demo.factory('search', function($http){
    return function(countryCode){
      return $http ({ 
        method: 'JSONP', 
        url: urlPath,
        params: {
          callback: 'JSON_CALLBACK', 
          country: countryCode,
        }
      })
    };
  }); // end of search
  // gets neighbors to countries
  demo.factory('neighbors', function($http){
    return function(codeResult){
      return $http ({ 
        method: 'JSONP', 
        url: 'http://api.geonames.org/neighboursJSON?country=' + codeResult + '&username=mse2335',
        params: {callback: 'JSON_CALLBACK'}
      })
    };
  });
  */