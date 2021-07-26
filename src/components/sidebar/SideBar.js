import React from "react";
import "../Uploader/Uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import {
  faHome,
  faTimes,
  faShippingFast,
  faClipboardList} from "@fortawesome/free-solid-svg-icons";
class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4">
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>CROSSDOCK<h6> - ETHIQUE ET SANTE -</h6></h3>
        </div>
        <Nav className="flex-column pt-2">
          <p className="ml-3">Transport Optimisation</p>
          <Nav.Item className="active">
            <Nav.Link href="/Home">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>
         </Nav>
         <Nav className="flex-column pt-2">
          <p className="ml-3 flex-column pt-2">Types et Tarifs de Transport</p>
          <Nav.Item className="active">
            <Nav.Link href="/Messagerie">
              <FontAwesomeIcon icon={faShippingFast} className="mr-2" />
              KUEHNE+NAGEL Messagerie
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="active">
            <Nav.Link href="/Affretement">
              <FontAwesomeIcon icon={faShippingFast} className="mr-2" />
              KUEHNE+NAGEL Affretement
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="active">
            <Nav.Link href="/Bert">
              <FontAwesomeIcon icon={faShippingFast} className="mr-2" />
              BERT Affretement
            </Nav.Link>
          </Nav.Item>
          </Nav>
          <Nav className="flex-column pt-2">
          <p className="ml-3 flex-column pt-2">Traitement des Commandes</p>
          <Nav.Item className="active">
            <Nav.Link href="/Import">
              <FontAwesomeIcon className="mr-2" />
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Importation des commandes
            </Nav.Link>
          </Nav.Item>
     
        </Nav>
      </div>
    );
  }
}

export default SideBar;
