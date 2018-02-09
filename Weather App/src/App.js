import React, { Component } from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherCurrent from "./WeatherCurrent";
import WeatherSaved from "./WeatherSaved";
import "./App.css";

// API key from https://openweathermap.org/
var OPEN_WEATHER_KEY = "b84fe043f5becb860e4516b08eca326b";

var STORAGE_KEY = "savedLocations";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            name: "",
            temp: "",
            main: "",
            description: "",
            icon: "",
            query: "",
            temp_max: "",
            temp_min: "",
            clouds: "",
            pressure: "",
            humidity: "",
            isValid: true
        };
    }

    componentDidMount() {
        var savedListString = localStorage.getItem(STORAGE_KEY);
        var savedListArray = JSON.parse(savedListString) || [];

        this.setState({
            list: savedListArray
        });

        if (savedListArray.length > 0) {
            this.fetchWeather(savedListArray[0]);
        } else {
            this.fetchWeather("Seattle");
        }
    }

    render() {
        return (
            <div className="weather-app">
                <div className="container">

                    <h1> Weather in ...</h1>

                    <div className="row">
                        <div className="col-md-6">
                            <WeatherSearch
                                onSubmit={(item) => {
                                    this.handleSubmit(item);
                                }}
                            />
                            <WeatherCurrent
                                name={this.state.name}
                                temp={this.state.temp}
                                icon={this.state.icon}
                                weatherDescShort={this.state.main}
                                weatherDescLong={this.state.description}
                                temp_max={this.state.temp_max}
                                temp_min={this.state.temp_min}
                                clouds={this.state.clouds}
                                humidity={this.state.humidity}
                                pressure={this.state.pressure}
                                onSave={(item) => {
                                    this.handleSave(item);
                                }}
                                isValid={this.state.isValid}
                            />

                        </div>
                        <div className="col-md-6">
                            <WeatherSaved
                                fetchWeather={(item) => {
                                    this.fetchWeather(item);
                                }}
                                list={this.state.list}
                                removeLocation={(item) => {
                                    this.handleRemoveLocation(item);
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    handleSubmit(query) {
        this.fetchWeather(query);
    }

    handleRemoveLocation(cityToRemove) {
        var currentCities = this.state.list;
        var newList = currentCities.filter((item) => {
            return item !== cityToRemove;
        });
        this.setState({
            list: newList
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    }

    fetchWeather(query) {
        var link;
        if (isNaN(query)) {
            link = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=" + OPEN_WEATHER_KEY;
        } else {
            link = "https://api.openweathermap.org/data/2.5/weather?zip=" + query + "&units=imperial&appid=" + OPEN_WEATHER_KEY;
        }

        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    name: json.name,
                    temp: Math.round(json.main.temp),
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    icon: json.weather[0].icon,
                    query: query,
                    temp_max: Math.round(json.main.temp_max),
                    temp_min: Math.round(json.main.temp_min),
                    clouds: json.clouds.all,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity,
                    isValid: true
                });
            })
            .catch((error) => {
                this.setState({
                    isValid: false
                });
            });
    }

    handleSave(item) {
        if (!this.state.list.includes(item)) {
            var newList = this.state.list.concat([item]);
            this.setState({
                list: newList
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
        }
    }

    handleClick(item) {
        this.fetchWeather(item);
    }


}

export default App;
