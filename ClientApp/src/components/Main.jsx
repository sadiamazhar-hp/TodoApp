import React, { Component } from "react";
import { Box } from "@mui/material";
import { Inputs } from "./Input";
import { TasksBox } from "./TasksBox";

export class Main extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/BlueWave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          },
          height: "100vh",
          "@media (max-width: 1299px)": {
            height: "130vh",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            border: "2px solid #000000",
            marginLeft: "15%",
            top: "5%",
            position: "absolute",
            width: "70%",
          }}
        >
          <Inputs />
          <TasksBox />
        </Box>
      </Box>
    );
  }
}
