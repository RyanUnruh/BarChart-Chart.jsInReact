import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    chartData: {},
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax call here
    this.setState({
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Rain",
            data: [5, 6, 4, 8, 5, 7, 9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-5 title-container">
          <Titles />
        </div>
        <div className="col-xs-7 form-container">
          <Chart
            chartData={this.state.chartData}
            location="Birmingham"
            legendPosition="bottom"
          />
        </div>
      </div>
    );
  }
}

export default App;
