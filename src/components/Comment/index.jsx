import React, { Component } from "react";
import CONSTANTS from "../../constants/appConstant";
const { BASE_PAGE_URL } = CONSTANTS;

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export default class Comment extends Component {
  render() {
    const { by, text, parent, time, url } = this.props.commentData;

    const handledateFormat = (time) =>
      (new Date(new Date().toLocaleDateString()).getTime() -
        new Date(new Date(time * 1000).toLocaleDateString()).getTime()) /
      (1000 * 3600 * 24);

    return (
      <li>
        <div className="story">
          <div className="story__info">
            <span>
              <Link url={`${BASE_PAGE_URL}/user?id=${by}`} title={by} />
            </span>{" "}
            |{" "}
            <span>
              {handledateFormat(time)}
              days ago
            </span>{" "}
            |{" "}
            <span>
              <Link url={`${BASE_PAGE_URL}/item?id=${parent}`} title="Parent" />
            </span>
          </div>
          <div className="story__title">
            <Link url={url} title = { text }  />
          </div>
        </div>
      </li>
    );
  }
}
