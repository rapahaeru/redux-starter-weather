import React, { Component } from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temperatures = cityData.list.map( (item) => item.main.temp );
        const pressure = cityData.list.map( (item) => item.main.pressure );
        const humidity = cityData.list.map( (item) => item.main.humidity );
        const longitude = cityData.city.coord.lon;
        const latitude = cityData.city.coord.lat;

        return(
            <tr key={cityData.city.id}>
                <td>{cityData.city.name} <GoogleMap lon={ longitude } lat={ latitude } /></td>
                <td><Chart units="K" color="red" data={ temperatures } /></td>
                <td><Chart units="hPa" color="orange" data={pressure} /></td>
                <td><Chart units="%" color="blue" data={humidity} /></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure(HPa)</th>
                        <th>Humiidty (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList)