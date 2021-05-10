const CountryList = () => {

    return (
        <div class="country_wrap">
        <div class="country_data_wrap">
          <div class="country">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country Code</th>
                  <th class="hide">Capital</th>
                  <th class="hide">Area in km<sup>2</sup></th>
                  <th class="hide">Population</th>
                  <th class="hide">Continent</th>
                </tr>
              </thead>
                <div>{{ country_data.countryName }}</div>
                <tbody>
                  <tr>
                    <td><a href="#/{{ item.countryCode }}/capital">{{ item.countryName }}</a></td>
                    <td>{{ item.countryCode }}</td>
                    <td class="hide">{{ item.capital }}</td>
                    <td class="hide">{{ item.areaInSqKm }}</td>
                    <td class="hide">{{ item.population }}</td>
                    <td class="hide">{{ item.continent }}</td>
                  </tr>
                </tbody>
              </table>
            <div class="button_wrap"><a href="#/home"><button>Home</button></a></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CountryList;
  