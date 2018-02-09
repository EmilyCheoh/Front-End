import React, { Component } from "react";

class WeatherCurrent extends Component {

    render() {
        if (!this.props.name) {
            return null;
        }
        return (
            <div>
                {this.props.isValid ? (
                    <form onSubmit={(e) =>
                        this.handleSave(e)
                    }>
                        <div className="information">
                            <h2 className="city">{this.props.name}</h2>
                            <div className="basic-info">
                                <img className="weather-icon" alt="" src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} />
                                <span className="temp">{this.props.temp}°F</span>
                                <p className="short-desc">{this.props.weatherDescShort}</p>
                                <p className="long-desc">{this.props.weatherDescLong}</p>
                            </div>
                            <div className="additional">

                                <p className="temp-max">High: {this.props.temp_max}°F</p>
                                <p className="temp-min">Low: {this.props.temp_min}°F</p>
                                <p className="pressure">Pressure: {this.props.pressure}hpa</p>
                                <p className="humidity">Humidity: {this.props.humidity}%</p>
                                <p className="clouds">Clouds: {this.props.clouds}%</p>
                            </div>
                            <button className="btn btn-default saveButton">Save this city</button>
                        </div>
                    </form>
                ) : (
                    <div className="alert alert-danger"> Invalid Location</div>
                )}
            </div>
        );
    }

    handleSave(e) {
        e.preventDefault();
        this.props.onSave(this.props.name);
    }
}

export default WeatherCurrent;
