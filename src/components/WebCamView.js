import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: "100%",
};

export default function WebCamView() {
  return <Webcam audio={false} videoConstraints={videoConstraints} />;
}
