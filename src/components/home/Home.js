import React, { useEffect } from 'react';
import Choose from './Choose/Choose';
import Fooditems from './Fooditems/Fooditems';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nabvar from './Navbar/Nabvar';



const Home = () => {


    return (
        <div>
           <Nabvar></Nabvar>
           <Main></Main>
           <Fooditems></Fooditems>
           <Choose></Choose>
           <Footer></Footer>
        </div>
    );
};

export default Home;