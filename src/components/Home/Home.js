import React from "react";
import Admin from "../Admin";

class Home extends React.Component {
  render() {
    return (
      <div className="App wrapper">
         <Admin /> 
     <div style={{
          position: 'absolute', left: '50%', top: '17%',
          transform: 'translate(-25%, -25%)'
      }}>
               
        <h1>This is Home Page</h1>
      </div>
      </div>
    );
  }
}
 
export default Home;

