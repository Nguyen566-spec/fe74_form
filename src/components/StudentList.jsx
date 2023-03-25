import React, { Component } from "react";
import { connect } from "react-redux";
import Student from "./Student";

class StudentList extends Component {
  renderStudentList = () => {
    const { studentList } = this.props;
    return studentList.map((student) => <Student key={student.id} student={student} />)
  }
  render() {
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderStudentList()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentReducer.studentList,
  };
};

export default connect(mapStateToProps, null)(StudentList);
