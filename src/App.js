import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/LandingPage/Login";
import Admin from './components/Admin';
import Home from './components/Home/Home';
import Messagerie from "./components/Logistics/Messagerie";
import Affretement from "./components/Logistics/Affretement";
import Bert from "./components/Logistics/Bert";
import Import from "./components/Traitement/Import";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
      <div className="App wrapper">
      <Route exact path="/" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Messagerie" component={Messagerie}/>
        <Route path="/Affretement" component={Affretement}/>
        <Route path="/Bert" component={Bert}/>
        <Route path="/Import" component={Import}/>
      </div>
      </Router>
    );
  }
}

export default App;
