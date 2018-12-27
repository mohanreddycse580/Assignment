import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      address: ""
    };

    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addUser() {}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-5 columns left">
          <h4>Add User</h4>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <label>Age</label>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
          />
          <label>Gender</label>
          <div>
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option name="male"> Male</option>
              <option name="female">Female</option>
            </select>
          </div>

          <label>
            Address:
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            className="button"
            value="Sign Up"
            onClick={this.signup}
          />
        </div>
      </div>
    );
  }
}

export default AddUser;
