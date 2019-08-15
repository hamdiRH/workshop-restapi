import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class contactlist extends Component {
  state = {
    contactlist: []
  };
  componentWillMount = () => {
    this.getcontact();
  };
  getcontact = () => {
    axios.get("/contact-list").then(res => {
      this.setState({
        contactlist: res.data
      });
    });
  };
  render() {
    console.log(this.state.contactlist);
    return (
      <div className="card">
        {this.state.contactlist.map(el => (
          <div
            style={{
              border: "2px solid black",
              width: "300px",
              margin: "20px",
              textAlign: "center"
            }}
          >
            <h1>Name: {el.name}</h1>
            <h2>Email: {el.email} </h2>
            <h3>Tel: {el.tel}</h3>

            <Link to={`/updatecontact/${el._id}`}>
              <button>Update</button>
            </Link>
            <button
              onClick={() => {
                axios.delete(`/contact-list/${el._id}`).then(this.getcontact);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
