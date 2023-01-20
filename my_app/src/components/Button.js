import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { color, title, onClick, btnColor } = props;
  return (
    <button
      style={{ backgroundColor: btnColor }}
      className="btn"
      onClick={() => {
        if (btnColor === "red") {
          onClick("green");
        } else {
          onClick("red");
        }
      }}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  title: "Default Button",
  color: "green",
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
