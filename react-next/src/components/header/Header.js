import React from "react";
import { useState } from "react";
// import Navigation from "./Navigation";
import Button from "@mui/material/Button";
import Navigation from "./Navigation";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  console.log(inputValue);

  return (
    <div className="header-container">
      <div className="header-container-inner">
        {/* left section */}
        <div className="header-container-left-section">
          {/* logo */}
          <div className="header-logo-image">
            <img src="https://uploads-ssl.webflow.com/60e4d26b0e81b6e753fac886/60e4d26b0e81b62be5fac9b8_partsapp-logo.svg" />
          </div>
          {/* search input*/}
          <div className="header-search-input">
            <form onSubmit={formSubmit}>
              <input
                type="search"
                placeholder="Browse prodcuts"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        {/* right section */}
        <div className="header-container-right-section">
          <div className="header-create-button">
            <Button variant="contained" color="success">
              Create
            </Button>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
