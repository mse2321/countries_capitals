import { Navbar, Button } from 'react-bootstrap';
import { useStateContext } from '../../context/state';

const NavContainer = (props) => {
  const {
    toggleProfile,
    toggleList
  } = props;

  const { getCountryList } = useStateContext();

  const resetCountryList = () => { 
    getCountryList(); 
    toggleList(true);
    toggleProfile(false);
  }

  return (
    <Navbar expand="lg" className="nav_container">
      <div className="button_wrap">
        <Button onClick={() => resetCountryList()} variant='info'>Back to Country List</Button>
      </div>
    </Navbar>
  );
}
  
  export default NavContainer;
  