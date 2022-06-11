import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/view/hotels/home";
import Circuit from "./components/circuit/Circuit";
import Hotels from "./components/view/hotels/hotels";
import Login from "./components/login/login";
import Chart from "./components/view/charts/charts";
import PrivateRoute from "./components/router/PrivateRoute";
import List from "./components/view/hotels/listHotel";
function App() {
  return (
    <Router>
      <Fragment>
        <section className='container'>
          <Routes>
            <Route exact path='/' element={<Login />} />

            <Route
              exact
              path='/home'
              element={
                <PrivateRoute>
                  <Home />{" "}
                </PrivateRoute>
              }
            />

            <Route
              exact
              path='/circuit'
              element={
                <PrivateRoute>
                  <Circuit />
                </PrivateRoute>
              }
            />
            <Route exact path='/hotel' element={<Hotels />} />
            <Route exact path='/listhotel' element={<List />} />
            <Route exact path='/chart' element={<Chart />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
