import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const travelDictionary = {
    beaches: ["Goa", "Phuket", "Maldives"],
    hills: ["Darjeeling", "Ladakh", "Alps"],
    skyScrapers: ["New York", "Los Angeles", "Dubai"],
    European: ["Lyon", "Geneva", "Paris"]
  };

  var [places, setPlace] = useState("");

  function themeHandler(theme) {
    places = travelDictionary[theme];
    setPlace(places);
    console.log(places);
  }

  var allplaces = Object.values(places);
  var themes = Object.keys(travelDictionary);
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="beach">
          🏖️{" "}
        </span>{" "}
        travel recommendor{" "}
      </h1>
      <h3 className="container container-center"> What type of destination?</h3>
      <ul className="container container-center">
        {themes.map(function (theme) {
          return (
            <span>
              <li className="inlineList" onClick={() => themeHandler(theme)}>
                {" "}
                <button key={theme}>{theme} </button>{" "}
              </li>
            </span>
          );
        })}

        <hr />
      </ul>
      {
        <ul className="container container-center">
          {allplaces.map(function (place) {
            return (
              <span>
                <li className="dropDown">
                  <div className="card" key={place}>
                    {place}
                  </div>
                </li>
              </span>
            );
          })}
        </ul>
      }
    </div>
  );
}
