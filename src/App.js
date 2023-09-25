// import logo from './logo.svg';
import "./App.css";
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

function App() {
  return (
    <>
    <Router>
    <Topbar />
      <Header />
      
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
    </Router>
     
    </>
  );
}

export default App;
