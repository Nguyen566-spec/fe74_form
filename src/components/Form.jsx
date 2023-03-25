import React, { Component } from "react";
import { connect } from "react-redux";
import { actionSubmit } from "./student/action";

class Form extends Component {
  state = {
    id: "",
    name: "",
    phone: "",
    email: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row g-4">
          <div className="col-6">
            <label htmlFor="id" className="form-label">
              Mã sinh viên
            </label>
            <input
              type="number"
              id="id"
              name="id"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.id}
            />
          </div>
          <div className="col-6">
            <label htmlFor="name" className="form-label">
              Tên sinh viên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success my-4">
          Thêm sinh viên
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (payload) => {
      dispatch(actionSubmit(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
