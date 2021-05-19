import { useStateContext } from '../../context/state';
import { Button } from 'react-bootstrap';

const CountryProfile = (props) => {
    const {
        toggleProfile,
        toggleList,
        toggleHome
    } = props;
  
    const { 
        country,
        countryNeighbors 
    } = useStateContext();

    const backToList = () => {
        toggleProfile(false);
        toggleList(true);
    }

    const backToHome = () => {
        toggleProfile(false);
        toggleHome(true)
    }

    return (
        <div className="detail_wrap" >
            <div className="button_wrap">
                <Button onClick={() => backToHome()}>Home</Button>
                <Button onClick={() => backToList()}>Browse Countries</Button>
            </div>
            <div className="data_wrap" >
                <div className="info_wrap">
                    <h1>{country.countryName}</h1>
                    <div className="intro_wrap_table">
                        <div className="info_headings">
                            <strong>Population of Country:</strong>
                        </div>
                        <div className="info_data">{country.countryName}</div><br />
                        <div className="info_headings">
                            <strong>Area:</strong> 
                        </div>
                        <div className="info_data">{country.areaInSqKm + 'km'}</div><br />
                        <div className="info_headings">
                            <strong>Capital:</strong>
                        </div>
                        <div className="info_data">{ country.capital }</div><br />
                        <div className="info_headings">
                            <strong>Population of Capital:</strong>
                        </div>
                        <div className="info_data">{ country.population }</div><br />
                        <div className="info_headings">
                            <strong>3 neighbors:</strong>
                        </div>
                        {
                            countryNeighbors ? countryNeighbors.map((neighbour) => {
                                return <div className="info_data">{ neighbour.countryName }</div>
                            }) : <div className="info_data">Not Applicable</div>
                        }
                    </div>
                    {/* 
                        <div className="image_wrap">
                            <div className="country_wrap map_wrap">
                                <img src={'http://www.geonames.org/img/country/250/' + country.countryCode + '.png'} alt="" />
                            </div>
                            <div className="flag_wrap">
                                <img id="flag" src={'http://www.geonames.org/flags/x/' + country.countryCode + '.gif'} alt="" />
                            </div>
                        </div>
                    */}
                </div>
            </div>
        </div>
    )
};
  
export default CountryProfile;