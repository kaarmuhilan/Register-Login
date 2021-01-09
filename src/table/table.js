import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
          <h2 style={{ textAlign: "center" }}>Admin Table </h2>
        <table border="1rem" width="800">
          <thead>
            <tr>
              <th id='head'>S.No</th>
              <th id='head'>User Name</th>
              <th id='head'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>kaarmuhil@gmail.com</td>
              <td ><input type="checkbox" defaultChecked="false"/>Disabled</td>
            </tr>
            <tr>
              <td>2</td>
              <td>muhil@gmail.com</td>
              <td><input type="checkbox" defaultChecked="false"/>Enable</td>
            </tr>
            <tr>
                <td>2</td>
              <td>lenin@gmail.com</td>
              <td><input type="checkbox" defaultChecked="false"/>Enable</td>
            </tr>
          </tbody>
        </table>
        <Link to="/register" style={{ textDecoration: 'none'}}>
            <button className="logButton">
                Back To Login
            </button>
        </Link>
      </div>
    );
  }
}

export default TableComponent;