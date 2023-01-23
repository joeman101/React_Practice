import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Result(props) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "5%",
          width: "95%",
          border: 1,
          boxShadow: 10,
          justifyContent: "flex-end",
          justifyItems: "flex-end",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "flex",
            paddingRight: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.result}
        </Typography>
      </Box>
    </div>
  );
}

export default Result;
