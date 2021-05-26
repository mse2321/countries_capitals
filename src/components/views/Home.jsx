import { useStateContext } from '../../context/state';
import { Button } from 'react-bootstrap';

const Home = (props) => {
    const {
        toggleHome,
        toggleList
    } = props;

    const { getCountryList } = useStateContext();

    const showCountryList = () => {
        getCountryList();
        toggleHome(false);
        toggleList(true);
    }

    return (
        <section className="intro_wrap">
            <p className="intro">Welcome to the Countries &amp; Capitals App!</p> 
            <p>Here you can learn more about each one and pull data from geonames.com.</p>
            <div className="button_wrap">
                <Button onClick={() => showCountryList()} variant='info'>Browse Countries</Button>
            </div>
        </section>
    );
  }
  
  export default Home;
  