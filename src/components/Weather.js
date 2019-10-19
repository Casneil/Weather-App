import React from "react";
import "../App.css";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        {this.props.temperature && (
          <p>Temperature: {this.props.temperature} </p>
        )}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {/* {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.timeZone && <p>Time Zone: {this.props.timeZone}</p>}
        {this.props.windSpeed && <p>Wind Speed: {this.props.windSpeed}</p>} */}
      </div>
    );
  }
}

export default Weather;
