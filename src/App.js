import React from "react";
import Global from "./components/GlobalStyle";
import AboutUs from "./Pages/AboutUs";
import {Switch, Route} from  'react-router-dom';
import Nav from "./components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetail from "./Pages/ContactUs/components/MovieDetails";
import {AnimatePresence} from 'framer-motion';
import {useLocation} from 'react-router-dom';


function App() {


  
  const location = useLocation();
  console.log(location)

  return (
    <div className="App">
      <Global />
   
        <Nav />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location}>
          <Route path="/" exact >
            <AboutUs />
          </Route>
          <Route path="/contact" >
            <OurWork />
          </Route>
          <Route path="/work/:id" exact>
            <MovieDetail />
          </Route>
          <Route path="/work"  exact >
            <ContactUs />
          </Route>
      </Switch>
    </AnimatePresence>

     
    </div>
  );
}

export default App;
