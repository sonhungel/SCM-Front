import React, { Fragment } from "react";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
} from "reactstrap";

import { toast, Bounce } from "react-toastify";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar1 from "../../../assets/images/avatars/1.jpg";

class UserBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  notify2 = () =>
    (this.toastId = toast(
      "You don't have any new items in your calendar for today! Go out and play!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "success",
      }
    ));

  render() {
    return (
      <Fragment>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-right">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img
                      width={42}
                      className="rounded-circle"
                      src={avatar1}
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="ml-2 opacity-8"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    className="rm-pointers dropdown-menu-lg-left"
                  >
                    <Nav vertical>
                      <NavItem className="nav-item-header">Activity</NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Chat
                          <div className="ml-auto badge badge-pill badge-info">
                            8
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Recover Password
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item-header">My Account</NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Settings
                          <div className="ml-auto badge badge-success">New</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Messages
                          <div className="ml-auto badge badge-warning">512</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">Logout</NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">Person Name</div>
                <div className="widget-subheading">Title of person</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserBox;
