import React from "react";
import TestFile from "../test/story.html";

const Iframe = ({ src, height, width }) => {
  return (
    <div>
      <iframe src={src} height={height} width={width} title="iframe" />
    </div>
  );
};

export default function TakeTest() {
  return <Iframe src={TestFile} height="720" width="80%" />;
  // return <Iframe src="http://plnkr.co/" height="720" width="80%" />;
}
