import React, { Component } from "react";
import { Link } from "react-router-dom";
import CONSTANTS from "../../constants/appConstant";
import { routes } from "../../constants/routes";
const { BASE_PAGE_URL } = CONSTANTS;

const CustomLink = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export default class Story extends Component {
  render() {
    const { id, by, title, kids, time, url, score } = this.props.storyData;

    const handledateFormat = (time) =>
      (new Date(new Date().toLocaleDateString()).getTime() -
        new Date(new Date(time * 1000).toLocaleDateString()).getTime()) /
      (1000 * 3600 * 24);

    return (
      <li>
        <div className="story">
          <div className="story__title">
            <CustomLink url={url} title={title} />
          </div>

          <div className="story__info">
            <span>
              {score} points by{" "}
              <CustomLink url={`${BASE_PAGE_URL}/user?id=${by}`} title={by} />
            </span>{" "}
            |{" "}
            <span>
              {handledateFormat(time)}
              days ago
            </span>{" "}
            |{" "}
            <span>
              <Link to={`${routes.comments}/${id}`}>{`${
                kids && kids.length > 0 ? kids.length : 0
              } comments`}</Link>
            </span>
          </div>
        </div>
      </li>
    );
  }
}
