import React, { Component } from "react";
import "./AddUser.css";

class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      users: [
        {
          user_id: "1",
          first_name: "Mohan",
          last_name: "Reddy",
          age: "28",
          gender: "Male",
          address: "GVP"
        },
        {
          user_id: "2",
          first_name: "Reddy",
          last_name: "Mohan",
          age: "30",
          gender: "Male",
          address: "Chennai"
        }
      ],
      checkedItems: new Map()
    };

    this.deleteFeedAction = this.deleteFeedAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }

  componentWillMount() {
    const data = JSON.parse(JSON.stringify(this.state.users));
    console.log(data);
    this.setState({
      data: data
    });
  }
  deleteFeedAction(e) {
    let updateIndex = e.target.getAttribute("value");

    console.log(this.state.checkedItems.get(updateIndex));

    if (this.state.checkedItems.get(updateIndex)) {
      this.state.data.splice(updateIndex, 1);
      this.setState({ data: this.state.data });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Display Records</h1>

        <div className="tableOrder">
          <table>
            <tr>
              <th>
                Select All:
                <input key="" onChange="" type="checkbox" checked="" value="" />
                <br />
              </th>
              <th>User ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Operation</th>
            </tr>
            {this.state.data.map((d, index) => (
              <tr>
                <td>
                  <input
                    name={index}
                    key={d.user_id}
                    onChange={this.handleChange}
                    type="checkbox"
                    checked={this.state.checkedItems.get(index)}
                  />
                </td>
                <td>{d.user_id}</td>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.age}</td>
                <td>{d.gender}</td>
                <td>{d.address}</td>

                <td>
                  <button
                    onClick={this.deleteFeedAction}
                    id={d.user_id}
                    value={index}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
export default DeleteUser;
