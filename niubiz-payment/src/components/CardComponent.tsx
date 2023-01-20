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
                    <div className="form-control">
                        <label>Id: </label>
                        <input type="text" value={this.props.idCard} />
                    </div>
                    <div className="form-control">
                        <label>Number: </label>
                        <input type="text" value={this.props.numberCard} />
                    </div>
                    <div className="form-control">
                        <label>Date: </label>
                        <input type="text" value={this.props.date} />
                    </div>
                    <div className="form-control">
                        <label>CVV: </label>
                        <input type="text" value={this.props.cvvCard} />
                    </div>
                </div>
            </div>
        )
    }
}