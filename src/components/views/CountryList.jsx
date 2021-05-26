import { useStateContext } from '../../context/state';
import { Button, Table } from 'react-bootstrap';

const CountryList = (props) => {
  const {
      toggleProfile,
      toggleList,
  } = props;

  const { countryList, getCountryNeighbors, setCountry } = useStateContext();

  const showCountryProfile = (countryCode, country) => {
    setCountry(country);
    getCountryNeighbors(countryCode);
    toggleList(false);
    toggleProfile(true);
  }

    return (
      <div className="countries_wrap">
        <div className="countries_data_wrap">
          <div className="countries">
            <Table striped bordered hover variant='light'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country Code</th>
                  <th>Capital</th>
                  <th className="number_heading">Area in km<sup>2</sup></th>
                  <th className="number_heading">Population</th>
                  <th>Continent</th>
                </tr>
              </thead>
                <tbody>
                  {
                    countryList ? countryList.map((country) => {
                        return <tr key={country.countryCode}>
                          <td className="btn_container">
                            <Button onClick={() => showCountryProfile(country.countryCode, country)} variant='info'>
                              { country.countryName }
                            </Button>
                          </td>
                          <td>{ country.countryCode }</td>
                          <td>{ country.capital }</td>
                          <td className="number">{ country.areaInSqKm }</td>
                          <td className="number">{ country.population }</td>
                          <td>{ country.continent }</td>
                      </tr>
                    }) : 'Please try again'
                  }
                </tbody>
              </Table>
          </div>
        </div>
      </div>
    );
  }
  
  export default CountryList;
  