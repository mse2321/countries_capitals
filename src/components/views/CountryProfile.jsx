const CountryProfile = () => {

    return (
        <div class="detail_wrap" >
            <div class="data_wrap" >
                <div class="info_wrap">
                    <h1>{country_data.countryName}</h1>
                    <div class="intro_wrap_table">
                        <div class="info_headings">
                            <strong>Population of Country:</strong>
                        </div>
                        <div class="info_data">{country_data.countryName}</div><br />
                        <div class="info_headings">
                            <strong>Area:</strong> 
                        </div>
                        <div class="info_data">{country_data.areaInSqKm + 'km'}</div><br />
                        <div class="info_headings">
                            <strong>Capital:</strong>
                        </div>
                        <div class="info_data">{ country_data.capital }</div><br />
                        <div class="info_headings">
                            <strong>Population of Capital:</strong>
                        </div>
                        <div class="info_data">{ country_data.population }</div><br />
                        <div class="info_headings">
                            <strong>3 neighbors:</strong>
                        </div>
                        <div class="info_data" ng-repeat="item in neighbours_list | limitTo: 3">{ item.name }</div>
                        <div class="info_data" ng-show="notApplicable">Not Applicable</div>
                    </div>
                    <div class="image_wrap">
                        <div class="country_wrap map_wrap">
                            <img ng-src="http://www.geonames.org/img/country/250/{{ country_data.countryCode }}.png" alt="" />
                        </div>
                        <div class="flag_wrap">
                            <img id="flag" src="http://www.geonames.org/flags/x/{{ country_data.countryCode | lowercase }}.gif" alt="" />
                        </div>
                    </div>
                </div>
                <div class="button_wrap">
                    <a href="#/home"><button>Home</button></a>
                    <a href="#/list"><button>Browse Countries</button></a>
                </div>
            </div>
        </div>
    )
};
  
export default CountryProfile;