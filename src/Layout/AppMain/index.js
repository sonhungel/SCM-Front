import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

import { ToastContainer } from "react-toastify";

const Dashboards = lazy(() => import("../../Views/Dashboards"));

const AppMain = () => {
  return (
    <Fragment>
      {/* Dashboards */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Dashboards examples
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>

      <Route
        exact
        path="/"
        render={() => <Redirect to="/dashboards/basic" />}
      />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
