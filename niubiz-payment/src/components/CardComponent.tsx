import React from "react";
import CardInterface from "../interfaces/CardInterface";

export default class CardComponent extends React.Component<CardInterface, object> {
    private constructor(props: CardInterface) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Datos de tarjeta de ejemplo</h1>
                <div className="left-text">
                    <div>
                        <span>Id: </span>
                        {this.props.idCard}
                    </div>
                    <div>
                        <span>Number: </span>
                        {this.props.numberCard}
                    </div>
                    <div>
                        <span>Date: </span>{this.props.date}
                    </div>
                    <div>
                        <span>CVV: </span>{this.props.cvvCard}
                    </div>
                </div>
            </div>
        )
    }
}