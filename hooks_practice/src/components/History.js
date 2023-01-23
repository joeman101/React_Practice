import React from "react";
import Typography from "@mui/material/Typography";

function History(props) {
  const { history } = props;
  return (
    <>
      {" "}
      <div>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "royalblue"
          }}
        >
          History
        </Typography>
      </div>
      <br/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <ul>
          {history.map((history) => (
            <Typography
            
              key={Math.random() * 1000}
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`${history}`}
            </Typography>
          ))}
        </ul>
      </div>
    </>
  );
}

export default History;
