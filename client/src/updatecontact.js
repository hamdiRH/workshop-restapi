import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class updatecontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }
  componentDidMount = () => {
    this.getcontact();
  };
  getcontact = () => {
    axios.get(`/contact-list-one/${this.props.id}`).then(res => {
      this.setState({
        contact: res.data
      });
    });
  };
  render() {
    console.log(this.state.contact);

    return (
      <div>
        <center>
          Name:{" "}
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="name"
            value={this.state.contact.name}
            onChange={e => {
              this.setState({
                contact: { ...this.state.contact, name: e.target.value }
              });
            }}
          />
          <br />
          Email:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="email"
            value={this.state.contact.email}
            onChange={e => {
              this.setState({
                contact: { ...this.state.contact, email: e.target.value }
              });
            }}
          />
          <br />
          Tel:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="tel"
            value={this.state.contact.tel}
            onChange={e => {
              this.setState({
                contact: { ...this.state.contact, tel: e.target.value }
              });
            }}
          />
          <br />
          <Link to="/contactlist">
            <button
              onClick={() => {
                axios.put(`/contact-list/${this.state.contact._id}`, {
                  name: this.state.contact.name,
                  email: this.state.contact.email,
                  tel: this.state.contact.tel
                });
              }}
            >
              Update contact
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
