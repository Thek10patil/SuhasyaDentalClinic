import React from "react";
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
function App() {
  return (
    <div>
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
