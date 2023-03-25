import React, { Component } from "react";
import Form from "./Form";
import StudentList from "./StudentList";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="bg-dark text-white p-4">Thông tin sinh viên</h1>
        <Form />
        <StudentList />
      </div>
    );
  }
}

export default Home;
