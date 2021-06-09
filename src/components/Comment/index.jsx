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
    const { id, by, title, kids, time, url } = this.props.commentData;
    return (
      <li>
        <div className="story">
          <div className="story__title">
            <Link url={url} title={title} />
          </div>

          <div className="story__info">
            <span>
              {(new Date(new Date().toLocaleDateString()).getTime() -
                new Date(
                  new Date(time * 1000).toLocaleDateString()
                ).getTime()) /
                (1000 * 3600 * 24)}{" "}
              days ago
            </span>{" "}
            |{" "}
            <span>
              <Link
                url={`${BASE_PAGE_URL}/item?id=${id}`}
                title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
              />
            </span>
          </div>
        </div>
      </li>
    );
  }
}
