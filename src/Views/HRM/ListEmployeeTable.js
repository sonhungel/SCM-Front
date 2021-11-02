import React, { useState } from "react";
import "../../assets/HRM.css";

export default function ListEmployeeTable() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className="container">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>Quản lý Nhân sự</h2>
              </div>
              <div class="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  class="btn btn-success"
                  data-toggle="modal"
                >
                  <i class="material-icons">&#xE147;</i>
                  <span>Add New Employee</span>
                </a>
                <a
                  href="#HRM/deleteEmployeeModal"
                  class="btn btn-danger"
                  data-toggle="modal"
                >
                  <i class="material-icons">&#xE15C;</i> <span>Delete</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll"></label>
                  </span>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      value="1"
                    />
                    <label for="checkbox1"></label>
                  </span>
                </td>
                <td>Dany Lo</td>
                <td>soengsouy@mail.com</td>
                <td>89 Chiaroscuro Rd, Portland, Phnom Penh</td>
                <td>0966686371</td>
                <td>
                  <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      &#xE254;
                    </i>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    class="delete"
                    data-toggle="modal"
                  >
                    <i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      &#xE872;
                    </i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="clearfix">
            <div class="hint-text">
              Showing <b>5</b> out of <b>100</b> entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
