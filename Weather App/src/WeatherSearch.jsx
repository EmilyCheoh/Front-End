import React, { Component } from "react";

class WeatherSearch extends Component {
    render() {
        return (
            <div>
                <form className="input-group search"
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}>
                    <input className="form-control input"
                        type="text"
                        ref="input"
                        placeholder="Please enter city or zipcode..."
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default search">Search</button>
                    </span>
                </form>
            </div>

        );
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.refs.input.value);
    }
}

export default WeatherSearch;
