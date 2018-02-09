import React, { Component } from "react";

class WeatherSaved extends Component {
    render() {
        return (
            <div className="panel panel-default saved-list">
                <p className="panel-heading saved-locations">Saved Locations</p>
                <ul className="list-group">
                    {this.props.list.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    this.handleClick(item);
                                }}>
                                    {item}
                                </a>
                                <a className="remove-location" onClick={(e) => {
                                    e.preventDefault();
                                    this.handleRemoveLocation(item);
                                }}>
                                    Remove
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    handleClick(item) {
        this.props.fetchWeather(item);
    }

    handleRemoveLocation(item) {
        this.props.removeLocation(item);
    }
}

export default WeatherSaved;


