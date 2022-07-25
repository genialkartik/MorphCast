import React from "react";
// var page = require("../test/story.html");
import page from "../test/story.html";
var htmlDoc = { __html: page };

export default function TakeTest() {
  return (
    <div dangerouslySetInnerHTML={htmlDoc} />
    // <iframe src={page}></iframe>
    // <iframe
    //   src={"https://psycho-test.netlify.app/story_html5.html?lms=1"}
    //   height="720"
    //   width="80%"
    // />
  );
}
