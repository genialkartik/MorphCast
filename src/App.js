import React from "react";
import "./App.css";
import CameraView from "./components/CameraView";
import TakeTest from "./components/TakeTest";

function App() {
  const [showTest, setShowTest] = React.useState(false);

  const handleShowTest = (value) => {
    setShowTest(value);
  };

  return (
    <div className="App">
      {showTest ? <TakeTest /> : <CameraView handleShowTest={handleShowTest} />}
    </div>
  );
}

export default App;
