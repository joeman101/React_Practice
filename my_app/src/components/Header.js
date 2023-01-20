import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>{props.title}</h1>
      </header>
      <Button
        color="red"
        title="Add"
        onClick={props.onClick}
        btnColor={props.btnColor}
      ></Button>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker Default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
