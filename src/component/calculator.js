import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class calculator extends React.Component {
    state = {
        temperature: ''
    };
    onTemperatureChange (e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render(){
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in celsius</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}