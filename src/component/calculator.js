import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import { convert, toCelsius, toFarenhide } from "./converter";
import TemperatureInput from "./TemparetureInput";

export default class Calculator extends React.Component {
    state = {temperature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    }
    render(){
        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const farenhide = scale === 'c'? convert(temperature, toFarenhide) : temperature;

        return (
            <div>
                <TemperatureInput 
                    scale="c"  
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />

                <TemperatureInput
                    scale="f" 
                    temperature={farenhide}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}