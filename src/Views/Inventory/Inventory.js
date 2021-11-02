import React, { Fragment } from "react";
import {Button, Col, Form, Row, Table, Container} from "react-bootstrap";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Inventory.css"
const Inventory = () => {
  return (
    <Fragment>
        <AppHeader />
        <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
            <div className="app-main__inner">
            <Button class="inventory-btnnnn" variant="primary" type="submit">test add</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <AppFooter />
        </div>
        </div>
    </Fragment>
    );
};

export default Inventory;
