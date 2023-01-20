import React from "react";
import CardInterface from "../interfaces/CardInterface";

export default class CardComponent extends React.Component<CardInterface, object> {
    private constructor(props: CardInterface) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Datos de tarjeta de ejemplo</h1>
                <div>
                    <label>Id:</label>
                    <div>{this.props.idCard}</div>
                </div>
                <div>
                    <label>Number:</label>
                    <div>{this.props.numberCard}</div>
                </div>
                <div>
                    <label>Date:</label>
                    <div>{this.props.date}</div>
                </div>
                <div>
                    <label>CVV:</label>
                    <div>{this.props.cvvCard}</div>
                </div>
            </div>
        )
    }
}