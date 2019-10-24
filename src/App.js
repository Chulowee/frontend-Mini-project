import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import BookingPickup from "./components/bookingPickup/BookingPickup";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/book"><h1>Book</h1></Link>
          <hr/>
          <div class="container">
            <Switch>
              <Route exact path="/book">
                <BookingPickup />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
