import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const travelDictionary = {
    beaches: [
      { name: "Goa", review: "3.5/5" },
      { name: "Phuket", review: "4.5/5" },
      { name: "Maldives", review: "5/5" }
    ],
    hills: [
      { name: "Darjeeling", review: "3/5" },
      { name: "Ladakh", review: "4.5/5" },
      { name: "Alps", review: "5/5" }
    ],
    skyScrapers: [
      { name: "New York", review: "4/5" },
      { name: "Los Angeles", review: "4.5/5" },
      { name: "Dubai", review: "5/5" }
    ],
    European: [
      { name: "Lyon", review: "5/5" },
      { name: "Geneva", review: "4.5/5" },
      { name: "Paris", review: "3/5" }
    ]
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
      <h1 className="container container-center">
        {" "}
        <span role="img" aria-label="beach">
          🏖️{" "}
        </span>{" "}
        travel and chill{" "}
      </h1>
      <div className="container container-center">
        Check out my favourite desitnations and their reviews.
      </div>
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
                    <div key={place.name}>{place.name}</div>
                    <div key={place.review}>{place.review}</div>
                  </div>
                </li>
              </span>
            );
          })}
        </ul>
      }
      <footer className="container container-center">
        Made with love 💖 by Mritunjay
      </footer>
    </div>
  );
}
