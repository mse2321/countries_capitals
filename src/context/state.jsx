
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
    const [token, setToken] = useState('');

    const getAuth = async () => {
        const auth = 'Basic ' + secrets.spotify.secret;

        const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth,
            'withCredentials': true
        };

        const url = "https://accounts.spotify.com/api/token";
        const body = 'grant_type=client_credentials';

        try {
            const response = await axios.post(url, body, { headers });
            setToken(response.data.access_token);
        } catch (error) {
            console.error(error);
        }
    };

    const getCountryList = async (artistName) => {
        const url = "https://api.discogs.com/database/search?";
        const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            const artistId = response?.data.results[0].id;
            getArtistDetails(artistId.toString());
        } catch (error) {
            console.error(error);
        }
    }

    const getCountry = async (artistName) => {
      const url = "https://api.discogs.com/database/search?";
      const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
      const endPoint = url + params;

      try {
          const response = await axios.get(endPoint);
          const artistId = response?.data.results[0].id;
          getArtistDetails(artistId.toString());
      } catch (error) {
          console.error(error);
      }
    }

    const getCountryNeighbors = async (artistName) => {
      const url = "https://api.discogs.com/database/search?";
      const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
      const endPoint = url + params;

      try {
          const response = await axios.get(endPoint);
          const artistId = response?.data.results[0].id;
          getArtistDetails(artistId.toString());
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
        setCountryNeighbors,
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