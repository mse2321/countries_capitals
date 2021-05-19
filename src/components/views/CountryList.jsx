import { useStateContext } from '../../context/state';
import { Button } from 'react-bootstrap';

const CountryList = (props) => {
  const {
      toggleProfile,
      toggleList,
      toggleHome
  } = props;

  const { countryList, getCountryNeighbors, setCountry } = useStateContext();

  const showCountryProfile = (countryCode, country) => {
    setCountry(country);
    getCountryNeighbors(countryCode);
    toggleList(false);
    toggleProfile(true);
  }

  const backToHome = () => {
    toggleList(false);
    toggleHome(true);
  }

    return (
        <div className="country_wrap">
          <div className="button_wrap">
            <Button onClick={() => backToHome()}>Home</Button>
          </div>
        <div className="country_data_wrap">
          <div className="country">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country Code</th>
                  <th className="hide">Capital</th>
                  <th className="hide">Area in km<sup>2</sup></th>
                  <th className="hide">Population</th>
                  <th className="hide">Continent</th>
                </tr>
              </thead>
                <tbody>
                  {
                    countryList ? countryList.map((country) => {
                        return <tr key={country.countryCode}>
                          <td><button onClick={() => showCountryProfile(country.countryCode, country)}>{ country.countryName }</button></td>
                          <td>{ country.countryCode }</td>
                          <td className="hide">{ country.capital }</td>
                          <td className="hide">{ country.areaInSqKm }</td>
                          <td className="hide">{ country.population }</td>
                          <td className="hide">{ country.continent }</td>
                      </tr>
                    }) : 'Please try again'
                  }
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default CountryList;
  