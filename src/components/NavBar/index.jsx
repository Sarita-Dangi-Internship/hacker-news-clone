import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <Link className="nav-bar__list-link">
            <li className="nav-bar__list-item nav-bar--title">Hacker News</li>
          </Link>
          <Link className="nav-bar__list-link">
            <li>Top Stories</li>
          </Link>
          <Link className="nav-bar__list-link">
            <li>New Stories</li>
          </Link>
          <Link className="nav-bar__list-link">
            <li>Best Stories</li>
          </Link>
          <Link className="nav-bar__list-link">
            <li>Comments</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
