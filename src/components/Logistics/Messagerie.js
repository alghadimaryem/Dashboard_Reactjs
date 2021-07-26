import React from "react";
import Uploader from "../Uploader/Uploader";
import Admin from '../Admin';
class Messagerie extends React.Component {
  render() {
    return (
     <div className="App wrapper">
      <Admin />
      <Uploader />
     </div>
    );
  }
}

export default Messagerie;
