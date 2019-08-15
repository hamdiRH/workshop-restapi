import React, { Component } from "react";
import axios from "axios";

export default class addcontact extends Component {
  state = {
    name: "",
    email: "",
    tel: null
  };
  render() {
    return (
      <div>
        <center>
          Name:{" "}
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          Email:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          Tel:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="tel"
            onChange={e => {
              this.setState({ tel: e.target.value });
            }}
          />
          <br />
          <button
            onClick={() => {
              axios.post("/contact-list", this.state);
            }}
          >
            addcontact
          </button>
        </center>
      </div>
    );
  }
}
