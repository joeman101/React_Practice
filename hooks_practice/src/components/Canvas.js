// 1*2 0 + 8*1
// 2  + 88

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Result from "./Result";
import InputBox from "./InputBox";
import History from "./History";
const calculate = require("../utils/calculate");

const infixToPostfix = require("infix-to-postfix");

function Canvas() {
  const [result, setResult] = useState(0);

  const [query, setQuery] = useState("");

  const [history, setHistory] = useState([]);

  const evaluate = async () => {
    const temp = query + " => " + calculate.default(query);
    setResult(temp);
    setHistory([...history, temp]);
    setQuery("");
  };

  const addChar = async (data) => {
    setQuery(data);
    return;
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            width: "80vh",
            border: 1,
            boxShadow: 10,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Calculator
          </Typography>
          <Result result={result} />
          <br />
          <InputBox
            query={query}
            addChar={addChar}
            evaluate={evaluate}
          ></InputBox>
          <br />
          {history.length > 0 ? (
            <History history={history}></History>
          ) : (
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No History!
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Canvas;
