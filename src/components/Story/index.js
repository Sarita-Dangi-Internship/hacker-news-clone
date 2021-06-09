import React, { Component } from "react";
// import { Link } from "react-router-dom";

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export default class Story extends Component {
  render() {
    const { id, by, title, kids, time, url, score } = this.props.storyData;
    return (
      <li>
        <div className="story">
          <div className="story__title">
            <Link url={url} title={title} />
          </div>

          <div className="story__info">
            <span>
              {score} points by{" "}
              <Link
                url={`https://news.ycombinator.com/user?id=${by}`}
                title={by}
              />
            </span>{" "}
            |{" "}
            <span>
              {new Date(time * 1000).toLocaleDateString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>{" "}
            |{" "}   
            <span>
              <Link
                url={`https://news.ycombinator.com/item?id=${id}`}
                title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
              />
            </span>
          </div>
        </div>
      </li>
    );
  }
}
