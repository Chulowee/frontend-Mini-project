import React, { Component } from 'react'
import {Button, Card, Col, DatePicker, Input, Row} from "antd";
import 'antd/dist/antd.css';


export default class BookingPickup extends Component {
onChange = (date, dateString) => {
        console.log(date, dateString);
}

onSubmit = (booking) =>{
    this.props.newBooking(booking);
}
    render() {
        return (
            <div style={{ background: "#ECECEC", padding: 40 }}>
                <Card>
                    <Row>
                        <Col span={18} push={6}>
                            <Input size="large" placeholder="large size" />
                        </Col>
                        <Col span={6} pull={18} style={{padding:10}}>
                            <label >Waybill Number: </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18} push={6}>
                            <DatePicker onChange={this.onChange} />
                        </Col>
                        <Col span={6} pull={18} style={{padding:10}}>
                            <label >Pick-Up Time: </label>
                        </Col>
                    </Row>
                    <div>
                        <Button onClick={this.sumbit}>Confirm</Button>
                        <Button type="danger">Cancel</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
