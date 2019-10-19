import React from "react";
import background from "../../images/path.svg";
import "./Info.css";

const Info = props => {
  return (
    //Top
    <section>
      <img src={background} alt="svg" id="bg-image" />
      <h1>
        Weather
        <br />
        APP<span>Now</span>
      </h1>
      <hr />
      <p>
        Your place for all daily/weekly Forecast updates.
        <br />
        Designed and developed by: Casneil Simpson
      </p>

      {/* // Bottom */}
      <div className="bottom">
        <p>Weather currently showing in:</p>
        <div className="button">
          <div className="btn">
            {props.icon === "C" ? (
              <button className="btn-clicked">C</button>
            ) : (
              <button onClick={props.setIcon}>C</button>
            )}

            <p>Celcius</p>
          </div>
          <div className="btn">
            {props.icon === "F" ? (
              <button className="btn-clicked">F</button>
            ) : (
              <button onClick={props.setIcon}>F</button>
            )}
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
