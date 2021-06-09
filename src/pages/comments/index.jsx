import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../../constants/appConstant";
import Comment from "./../../components/Comment/index";

const { BASE_API_URL } = CONSTANTS;

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let story, comments;
      if (this.props.match.params.id) {
        story = await axios.get(
          `${BASE_API_URL}/item/${this.props.match.params.id}.json`
        );
        const kidId = await Promise.all(
          story.data.kids.slice(0, 2).map((kidId) => this.getComments(kidId))
        );
        this.setState({ comments: kidId, isLoading: false });
      } else {
        comments = await axios.get(`${BASE_API_URL}/maxitem.json`);
        let tempComments = [];
        for (let i = 0; i < 10; i++) {
          const comment = await axios.get(
            `${BASE_API_URL}/item/${comments.data - i}.json`
          );
          tempComments.push(comment);
          this.setState({ comments: tempComments, isLoading: false });
        }
      }
    } catch (e) {
      console.log("error");
    }
  }

  /**
   *
   * @param {*} id
   * @returns comments of selected story
   */
  getComments = async (id) => {
    try {
      const comment = await axios.get(`${BASE_API_URL}/item/${id}.json`);
      return comment;
    } catch (e) {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="story-container">
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="comment">
            {this.state.comments.map((comment) => (
              <Comment key={comment.data.id} commentData={comment.data} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
