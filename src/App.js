import React from "react";
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
