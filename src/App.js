// import logo from './logo.svg';
import React,{useState,useEffect} from "react";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";
import Topbar from "./components/Header/Topbar";
import Header from "./components/Header/Header";
import Home from "./components/Home";
 import About from "./components/About";
import Event from "./components/Event";
import Team from "./components/Team";
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Design from "./components/Design";

function App() {
const[loading,setLoading]=useState(false);
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },2000)
},[])
  return (
    <>
    {
      loading ?
      <HashLoader color={"#1af4de"} loading={loading} size={150} style={{margin:'auto'}} />
 :
<Router>
    
      <Header />
      <Design/>
    <div >
    <Switch>
    <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Event">
            <Event />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
    </div>
    {/* <Footer/> */}
    </Router>
    }
    
    
    </>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from '../src/components/Header/Header';
// import Home from '../src/components/Home';
// import About from '../src/components/About';
// import Event from '../src/components/Event';
// import Team from '../src/components/Team';
// import Contact from '../src/components/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/Home" component={Home} />
//         <Route path="/About" component={About} />
//         <Route path="/Event" component={Event} />
//         <Route path="/Team" component={Team} />
//         <Route path="/Contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
