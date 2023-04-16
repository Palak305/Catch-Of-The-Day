import React from "react";
import PropTypes from "prop-types"; //tells what kind of data we expect

const Header=(props)=>( <header className="top">
            <h1>
              Catch
              <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
              </span>
              Day
            </h1>
            <h3 className="tagline"> 
            {/*setting the tagline prop in app.js*/}
              <span>{props.tagline}</span>
            </h3>
            </header>
);
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};


export default Header;