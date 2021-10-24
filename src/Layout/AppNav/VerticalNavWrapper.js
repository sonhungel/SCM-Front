import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import { MainNav, ComponentsNav, SettingNav } from "./NavItems";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Quản lý</h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Chức năng chính</h5>
        <MetisMenu
          content={ComponentsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Người dùng</h5>
        <MetisMenu
          content={SettingNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
