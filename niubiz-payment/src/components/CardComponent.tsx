import React from "react";
import CardInterface from "../interfaces/CardInterface";

export default class CardComponent extends React.Component<CardInterface, object> {
    private constructor(props: CardInterface) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Datos de tarjeta</h1>
                <div>
                    <label>Id:</label>
                    <span>{this.props.idCard}</span>
                </div>
                <div>
                    <label>CVV:</label>
                    <span>{this.props.cvvCard}</span>
                </div>
                <div>
                    <label>Number:</label>
                    <span>{this.props.numberCard}</span>
                </div>
            </div>
        )
    }
}