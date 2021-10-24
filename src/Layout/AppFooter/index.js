import React, { Fragment } from "react";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <div>SCM system</div>
                </li>
                <li className="nav-item">
                  <span className="ms-1">_&copy; 2021 UIT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFooter;
