import React from "react";
import "./Region.css";
import sunIcon from "../../images/sunny.svg";
import JamaicaImage from "../../images/Jamaica.jpg";

const RegionJam = props => {
  const convertTempFar = num => {
    return Math.floor(num * 1.8 + 32);
  };

  return (
    <section>
      <div className="badge">
        <div className="svg-tempJam">
          <img src={sunIcon} alt="sunny" />
          {props.icon === "C" ? (
            <p id="temperature">{props.tempJam}°</p>
          ) : (
            <p id="temperature"> {convertTempFar(props.tempJam) + "°"}</p>
          )}
        </div>
        <p>{props.summaryJam}</p>
      </div>
      <img src={JamaicaImage} alt="Berlin" id="country-image" />
      <div className="region">
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p>{props.cityJam}</p>
          <p>{props.codeJam}</p>
        </div>
      </div>
    </section>
  );
};

export default RegionJam;
