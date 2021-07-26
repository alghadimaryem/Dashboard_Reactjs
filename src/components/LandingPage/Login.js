import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";
import "./Login.css";
import Tracking from '../../images/logistic.jpg';
class Login extends React.Component {
    
 
  render() {
   
    return (
        <div className="App wrapper">
                <div class="col-md-6 d-none d-md-flex bg-image"><img src={Tracking} alt={"tracking"}/> </div>
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-3">CROSSDOCK</h3>
                                   {/*} <h5 class="display-4">Ethique et santé</h5>*/}
                                    <p class="text-muted mb-4">Admin Login</p>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                            <label for="customCheck1" class="custom-control-label">Remember password</label>
                                        </div>
                                        <Nav.Link href="/Home">
                                       <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button></Nav.Link>      
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

         
      </div>
)
};
}

export default Login;