import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
    state = {
        temperature: '123',
    };
    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render(){
        const {temperature} = this.state;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in celsius</legend>
                    <input
                        type="text"
                        value={this.state.temperature}
                        onChange={this.onTemperatureChange}
                    />
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}