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
      let story;
      if (this.props.match.params.id) {
        story = await axios.get(
          `${BASE_API_URL}/item/${this.props.match.params.id}.json`
        );
        console.log("story", story);
      } else {
        const latestComments = await axios.get(`${BASE_API_URL}/maxitem.json`);
        console.log("lateststory", latestComments);
      }
      if (story.data.kids) {
        const kidId = await Promise.all(
          story.data.kids.slice(0, 2).map((kidId) => this.getComments(kidId))
        );
          console.log(kidId);
          this.setState({ comments: kidId });
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
          <ol type="1">
            {this.state.comments.map((comment) => (
              <Comment key={comment.data.id} commentData={comment.data} />
            ))}
            hello
          </ol>
        )}
      </div>
    );
  }
}
