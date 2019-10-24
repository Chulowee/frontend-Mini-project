import React, {Component} from "react";
import {Card} from "antd";
import BookingPickup from "./BookingPickup";

export default class BookingWrapper extends Component{
    render() {
        return (
            <div style={{ background: "#ECECEC", padding: 40 }}>

                <Card title="Todo List" bordered={false} style={{ width: 600}}>

                    <div className="todo-wrapper">
                            <BookingPickup newBooking = {this.props.createNewBooking}/>
                    </div>
                </Card>
            </div>
        )
    }
}