import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  deleteUsers,
  fetchUnRegisteredUsers,
  validateUsers,
} from "./actions/action";
import "../App.css";

class UserContainer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <div>
            <button onClick={this.props.fetchRegisteredUsers}>
              Fetch all Registered Users
            </button>
            <button onClick={this.props.deleteAllUsers}>
              Delete All Users
            </button>
          </div>
          {this.props.data.users && this.props.data.users.length
            ? this.props.data.users.map((data) => {
                return (
                  <div className="parent-section" key={data.id}>
                    <div className="child-section">
                      First Name: {data.firstName}
                    </div>
                    <div>Email: {data.emailAddress}</div>
                    <div>Country: {data.country}</div>
                    <div>Organization Type: {data.organizationType}</div>
                    {data?.projectId && <div>projectId: {data.projectId}</div>}
                  </div>
                );
              })
            : ""}
          {this.props.data.error ? <h1>{this.props.data.error}</h1> : ""}
        </div>

        <div>
          <div>
            <button onClick={this.props.fetchUnRegisteredUsers}>
              Fetch all Un Registered Users
            </button>
            <button onClick={this.props.deleteAllUsers}>
              Delete All Users
            </button>
          </div>
          {this.props.data.unRegisteredUsers &&
          this.props.data.unRegisteredUsers.length
            ? this.props.data.unRegisteredUsers.map((data) => {
                return (
                  <div className="parent-section" key={data.id}>
                    <div className="child-section">id: {data.id}</div>
                    <div>Email: {data.emailAddress}</div>
                    <div>registrationId: {data.registrationId}</div>
                    {data?.projectId && <div>projectId: {data.projectId}</div>}
                  </div>
                );
              })
            : ""}
          {this.props.data.error ? <h1>{this.props.data.error}</h1> : ""}
        </div>

        <div>
          <button onClick={this.props.membershipVal}>
            Membership Validate
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  const data = state;
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegisteredUsers: () => dispatch(fetchUsers()),
    fetchUnRegisteredUsers: () => dispatch(fetchUnRegisteredUsers()),
    deleteAllUsers: () => dispatch(deleteUsers()),
    membershipVal: () => dispatch(validateUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
