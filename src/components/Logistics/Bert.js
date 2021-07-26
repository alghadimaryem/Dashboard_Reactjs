import React from "react";
import Uploader from "../Uploader/Uploader";
import Admin from "../Admin";
class Bert extends React.Component {
  render() {
    return (
     <div className="App wrapper">
      <Admin />    
      <Uploader />
     </div>
    );
  }
}

export default Bert;
