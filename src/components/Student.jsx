import React, { Component } from "react";
import { connect } from "react-redux";
import {actionDelete} from "./student/action";

class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.phone}</td>
        <td>{student.email}</td>
        <td>
          <button className="btn btn-primary">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(student.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (payload) => {
      dispatch(actionDelete(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(Student);
