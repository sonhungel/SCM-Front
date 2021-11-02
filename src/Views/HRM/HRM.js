import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import ListEmployeeTable from "./ListEmployeeTable";
import DetailEmployeeTable from "./DetailEmployeeTable";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

import "../../assets/base.css";

const RegularTables = () => {
  
  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <ReactCSSTransitionGroup
              component="div"
              transitionName="TabsAnimation"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Row>
                <Col lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ListEmployeeTable />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Chi tiết</CardTitle>
                      <DetailEmployeeTable />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </ReactCSSTransitionGroup>
          </div>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default RegularTables;
