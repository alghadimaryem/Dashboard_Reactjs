import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Admin from '../Admin';
import Uploader from '../Uploader/Uploader';
class Import extends React.Component {
    render() {
      return (
       <div className="App wrapper">
        <Admin />     
        <Uploader />
        </div>
  );
};
}

export default Import;
