//The component imports React and the Component class from the 'react' package.
import React, { Component } from 'react';
/*FetchData is a class-based component extending the Component class provided by React.
It sets the display name of the component using the static displayName property. */
export class FetchData extends Component {
  static displayName = FetchData.name;
  /*The constructor initializes 
  the component's state with an empty array for forecasts and sets loading to true. */
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }
  /*The componentDidMount lifecycle method is called after the component is mounted
  (i.e., inserted into the DOM).
It calls the populateWeatherData method to fetch weather forecast data from the server. */
  componentDidMount() {
    this.populateWeatherData();
    }
  /*The static renderForecastsTable method generates 
  JSX markup for rendering weather forecast data in a table format. */
  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  /*The render method renders the component's UI based on its state.
  It displays a loading message if data is being fetched (loading is true)
  or renders the forecast table using the renderForecastsTable method. */
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
  /*The populateWeatherData method uses fetch API to make an HTTP GET request to the '/weatherforecast' 
  endpoint.Upon receiving a response, it parses the JSON data and updates
  the component's state with the fetched weather forecast data */
  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
