import React, { Fragment } from "react";
import {Button, Col, Form, Row, Table, Container} from "react-bootstrap";
import { useForm } from "react-hook-form";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Inventory.css"
const Inventory = () => {
    const { register, control, handleSubmit, setValue, getValues, reset } = useForm({ defaultValues: {}, shouldUnregister: false });

    const onSubmitForm = (data) => {
        
    };

    const resetForm = () => {
        
    }

    return (
    <Fragment>
        <AppHeader />
        <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
            <div className="app-main__inner">
            <Container fluid className={"pl-0 pr-5 pt-4"}>
            <div>Sản phẩm</div>
                <Form onSubmit={handleSubmit(onSubmitForm)} className={"pt-4"}>
                    <Form.Row>
                        <Col xl={6} className={"text-left"}>
                        <Button variant="primary" onClick={resetForm}>Tạo</Button>
                        </Col>
                        <Col xl={3}>
                            <Form.Control type="input" />
                        </Col>
                        <Col xl={2} className={"text-right"}>
                            <Button variant="primary" type="submit">
                                Tìm kiếm
                            </Button>
                        </Col>
                        <Col xl={1} className={"text-left"}>
                            <Button variant="secondary" onClick={resetForm}>
                                Tải lại
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            <p />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã hàng</th>
                        <th>Tên hàng</th>
                        <th>Đơn giá</th>
                        <th>Tồn kho</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
            </div>
            <AppFooter />
        </div>
        </div>
    </Fragment>
    );
};

export default Inventory;
