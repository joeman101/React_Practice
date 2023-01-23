import React from "react";
import Input from "@mui/material/Input";

function InputBox(props) {
  var regExp = /[a-zA-Z]/g;
  var numberRegex = /^\d+$/;
  const input_handler = async (e) => {
    {
      console.log("e.target.value", e.target.value);
      e.preventDefault();
      const test_variable = props.query.charAt(props.query.length - 1);
      const last_input = e.target.value.charAt(e.target.value.length - 1);
      if (regExp.test(e.target.value)) {
        alert("no alphabets please!");
        return;
      }
      if (
        numberRegex.test(last_input) ||
        last_input === "+" ||
        last_input === "-" ||
        last_input === "*" ||
        last_input === "/" ||
        last_input === ""
      ) {
        if (
          (test_variable === "+" ||
            test_variable === "-" ||
            test_variable === "*" ||
            test_variable === "/") &&
          (last_input === "+" ||
            last_input === "-" ||
            last_input === "*" ||
            last_input === "/")
        ) {
          alert("cannot have two consecutive operations");
          return;
        }
        props.addChar(e.target.value);
      }
      else {
        alert("please type only numbers and +,-,/,*")
        return 
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Input
        size="lg"
        placeholder="Type in here…"
        value={props.query}
        onChange={(e) => {
          input_handler(e);
        }}
        variant="soft"
      />
      <button
        onClick={() => {
          props.evaluate();
        }}
      >
        find
      </button>
    </div>
  );
}

export default InputBox;
