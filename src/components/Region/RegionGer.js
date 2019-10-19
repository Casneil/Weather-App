import React from "react";
import "./Region.css";
import snowIcon from "../../images/snow.svg";
import berlinImage from "../../images/Berlin.jpg";

const RegionGer = props => {
  const convertTempFar = num => {
    return Math.floor(num * 1.8 + 32);
  };

  return (
    <section>
      <div className="badgeGer">
        <div className="svg-tempGer">
          {props.icon === "C" ? (
            <p id="temperatureGer">{props.tempGer}°</p>
          ) : (
            <p id="temperatureGer">{convertTempFar(props.tempGer) + "°"}</p>
          )}
          <img src={snowIcon} alt="sunny" />
        </div>
        <p>{props.summaryGer}</p>
      </div>
      <img src={berlinImage} alt="Berlin" id="country-imageGer" />
      <div className="region">
        <div>
          <p></p>
          {/* <p>GERMANY</p> */}
        </div>
        <div>
          <p>{props.cityGer}</p>
          <p>{props.codeGer}</p>
        </div>
      </div>
    </section>
  );
};

export default RegionGer;
