import React, { useState } from 'react';
import CountryProfile from './CountryProfile';
import Home from './Home';
import CountryList from './CountryList';

const App = () => {
    const [showHome, toggleHome] = useState(true);
    const [showList, toggleList] = useState(false);
    const [showProfile, toggleProfile] = useState(false);

    return (
        <React.Fragment>
            { showHome && <Home toggleHome={toggleHome} toggleList={toggleList} /> }
            { showList && <CountryList toggleHome={toggleHome} toggleList={toggleList} toggleProfile={toggleProfile} /> }
            { showProfile && <CountryProfile toggleHome={toggleHome} toggleList={toggleList} toggleProfile={toggleProfile}/> }
        </React.Fragment>
    );
}

export default App;