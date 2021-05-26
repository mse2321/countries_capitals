import { useStateContext } from '../../context/state';
import { Card } from 'react-bootstrap';

const CountryProfile = () => {
    const { 
        country,
        countryNeighbors 
    } = useStateContext();

    console.log(countryNeighbors);

    return (
        <div className="profile_wrap" >
            <div className="data_wrap">
                <Card className="info_wrap" text="secondary">
                    <Card.Header>
                        <div className="country_name_container">
                            <div className="flag_wrap">
                                <img id="flag" 
                                    src={'https://www.countryflags.io/' + country.countryCode + '/flat/64.png'} 
                                    alt={country.countryName + ' flag'} />
                            </div>
                            <h2>{country.countryName}</h2>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="intro_wrap_table">
                            <Card.Title className="info_headings">Population of Country:</Card.Title>
                            <Card.Text className="info_data">{country.population}</Card.Text>
                            <Card.Title className="info_headings">Area:</Card.Title>
                            <Card.Text className="info_data">{country.areaInSqKm + 'km'}</Card.Text>
                            <Card.Title className="info_headings">Capital:</Card.Title>
                            <Card.Text className="info_data">{ country.capital }</Card.Text>
                            <Card.Title className="info_headings">Languages:</Card.Title>
                            <Card.Text className="info_data">{ country.languages }</Card.Text>
                            <Card.Title className="info_headings">{'Neighbours: ' + countryNeighbors.length}</Card.Title>
                            <Card.Text className="info_data">
                                {
                                    countryNeighbors ? countryNeighbors.map((neighbour) => {
                                        return <div className="info_data">{ neighbour.countryName }</div>
                                    }) : <div className="info_data">Not Applicable</div>
                                }
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
};
  
export default CountryProfile;