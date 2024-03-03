import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<News key={"general"} category="general" />} />
            <Route exact path="/entertainment" element={<News key={"entertainment"} category="entertainment" />} />
            <Route exact path="/Sports" element={<News key={"sports"} category="sports" />} />
            <Route exact path="/technology" element={<News key={"technology"} category="technology" />} />
            <Route exact path="/Health" element={<News key={"health"} category="health" />} />
            <Route exact path="/Business" element={<News key={"business"} category="business" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

