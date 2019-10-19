import React from "react";

const SearchForm = props => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <h1 className="title">My Weather App</h1>
        <div className="input-container">
          <input
            type="text"
            name="city"
            className="input input1"
            placeholder="Enter City"
          />
          <button className="search-button">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
