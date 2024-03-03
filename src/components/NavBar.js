import React, { Component } from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg navbar-light bg-light px-3 sticky">
        <Link className="navbar-brand" to="/">DAILY-NEWS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">General</Link></li>
            <li className="nav-item ">
              <Link className="nav-link" to="/entertainment">Entertainment </Link></li>
            <li className="nav-item ">
              <Link className="nav-link" to="/Sports" >Sports</Link></li>
            <li className="nav-item">
              <Link className="nav-link  bluee" to="/technology">Technology</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link></li>
          </ul>

        </div>
      </nav></div>
    )
  }
}
