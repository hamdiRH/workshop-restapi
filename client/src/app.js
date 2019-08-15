import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Contactlist from "./contactlist";
import Addcontact from "./addcontact";
import Updatecontact from "./updatecontact";
export default class app extends Component {
  render() {
    return (
      <Router>
        <center>
          <Link to="/">
            <h1>Contact List</h1>
          </Link>
          <Link to="/contactlist">
            <button>Contact List</button>
          </Link>
          <Link to="/addcontact">
            <button>Add Contact</button>
          </Link>
        </center>
        <Route exact path="/contactlist" render={() => <Contactlist />} />
        <Route exact path="/addcontact" render={() => <Addcontact />} />
        <Route
          path="/updatecontact/:id"
          render={props => <Updatecontact id={props.match.params.id} />}
        />
      </Router>
    );
  }
}
