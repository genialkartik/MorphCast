/* global CY */
import { Box, Button, Typography } from "@mui/material";
import React from "react";

// SDK GETTING STARTED SNIPPET
// ( see https://ai-sdk.morphcast.com/latest/index.html )

class SampleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emo: "",
      age: "",
      gender: "",
    };
  }

  componentDidMount() {
    CY.loader()
      .licenseKey("1a828f20c14b793899f90d69e3a24e4c5ac83fbce280")
      .addModule(CY.modules().FACE_EMOTION.name)
      .addModule(CY.modules().FACE_GENDER.name)
      .addModule(CY.modules().FACE_AGE.name)
      .load()
      .then(({ start, stop }) => {
        this.stopSDK = stop;
        this.startSDK = start;
      });

    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
      this.setState({ emo: evt.detail.output.dominantEmotion });
    });
    window.addEventListener(CY.modules().FACE_GENDER.eventName, (evt) => {
      this.setState({ gender: evt.detail.output.mostConfident });
    });
    window.addEventListener(CY.modules().FACE_AGE.eventName, (evt) => {
      this.setState({ age: evt.detail.output.numericAge });
    });
  }

  render() {
    return (
      <>
        <Box style={{ textAlign: "left" }}>
          <Typography component="h1" variant="h5">
            Detected dominant Emotion:{" "}
            <strong>{this.state.emo || "N/A"}</strong>
          </Typography>
          <Typography component="h1" variant="h5">
            Detected Age: <strong>{this.state.age || "N/A"}</strong>
          </Typography>
          <Typography component="h1" variant="h5">
            Detected Gender: <strong>{this.state.gender || "N/A"}</strong>
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 13 }}
            onClick={() => {
              this.startSDK();
              this.props.handleShowCam(true);
            }}
          >
            Start Detector
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              this.stopSDK();
              this.props.handleShowCam(false);
            }}
          >
            Stop Detector
          </Button>
        </Box>
      </>
    );
  }
}

export default SampleApp;
