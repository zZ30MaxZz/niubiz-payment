import React from "react";
import CardInterface from "../interfaces/CardInterface";

export default class CardComponent extends React.Component<CardInterface, object> {
    private constructor(props: CardInterface) {
        super(props)
    }


    render() {
        const inputChangedHandler = (e: any) => {
            console.log(e.target.value);
        }

        return (
            <div>
                <h1>Datos de tarjeta de ejemplo</h1>
                <div className="left-text">

                    <div className="form-control">
                        <label>Id: </label>
                        <input type="text" defaultValue={this.props.idCard} onChange={(e) => inputChangedHandler(e)} />
                    </div>
                    <div className="form-control">
                        <label>Number: </label>
                        <input type="text" defaultValue={this.props.numberCard} onChange={(e) => inputChangedHandler(e)} />
                    </div>
                    <div className="form-control">
                        <label>Date: </label>
                        <input type="text" defaultValue={this.props.date} onChange={(e) => inputChangedHandler(e)} />
                    </div>
                    <div className="form-control">
                        <label>CVV: </label>
                        <input type="text" defaultValue={this.props.cvvCard} onChange={(e) => inputChangedHandler(e)} />
                    </div>

                </div>
            </div>
        )
    }
}