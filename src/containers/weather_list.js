import React, { Component } from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        console.log(cityData);
        const temperatures = cityData.list.map( (item) => item.main.temp );
        const pressure = cityData.list.map( (item) => item.main.pressure );
        const humidity = cityData.list.map( (item) => item.main.humidity );

        console.log('tipo: ', temperatures);
        return(
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temperatures} /></td>
                <td><Chart data={pressure} /></td>
                <td><Chart data={humidity} /></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humiidty</th>
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