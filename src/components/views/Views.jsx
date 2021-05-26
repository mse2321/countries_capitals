import React, { useState } from 'react';
import CountryProfile from './CountryProfile';
import Home from './Home';
import CountryList from './CountryList';
import NavContainer from '../layout/NavContainer';

const App = () => {
    const [showHome, toggleHome] = useState(true);
    const [showList, toggleList] = useState(false);
    const [showProfile, toggleProfile] = useState(false);

    return (
        <React.Fragment>
            { (!showHome && showProfile) && <NavContainer toggleHome={toggleHome} toggleList={toggleList} toggleProfile={toggleProfile}/>}
            { showHome && <Home toggleHome={toggleHome} toggleList={toggleList} /> }
            { showList && <CountryList toggleHome={toggleHome} toggleList={toggleList} toggleProfile={toggleProfile} /> }
            { showProfile && <CountryProfile /> }
        </React.Fragment>
    );
}

export default App;