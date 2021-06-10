import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from '../../constants/routes';

export default class index extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <Link className="nav-bar__list-link" to={routes.index}>
            <li className="nav-bar__list-item nav-bar--title">Hacker News</li>
          </Link>
          <Link className="nav-bar__list-link" to={routes.topStories}>
            <li>Top Stories</li>
          </Link>
          <Link className="nav-bar__list-link" to={routes.newStories}>
            <li>New Stories</li>
          </Link>
          <Link className="nav-bar__list-link" to={routes.bestStories}>
            <li>Best Stories</li>
          </Link>
          <Link className="nav-bar__list-link" to={routes.comments}>
            <li>Comments</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
