import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../../constants/appConstant";
import Story from "./../../components/Story/index";

const { BASE_API_URL } = CONSTANTS;

export default class TopStories extends Component {
  state = {
    topStories: [],
    comments:[],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTopStories();
  }

  fetchTopStories = async () => {
    try {
      const { data: topStoriesIds } = await axios.get(
        `${BASE_API_URL}/topstories.json`
      );
      const stories = await Promise.all(
        topStoriesIds.slice(0, 20).map((storyId) => this.getStory(storyId))
      );
      console.log(stories);
      this.setState({ topStories: stories, isLoading: false });

      // const comments = await Promise.all(
      //   stories.map((storyId) =>(storyId.data.kids.slice(0,5).map(kidId=>console.log(kidId))))
      // );
      // console.log(comments);
      // this.setState({ comments: comments, isLoading: false });
    } catch (e) {
      console.log("error");
    }
  };

  /**
   *
   * @param {*} id
   * @returns each story item
   */
  getStory = async (id) => {
    try {
      const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
      return story;
    } catch (e) {
      console.log("error");
    }
  };

  // /**
  //  * 
  //  * @param {*} id 
  //  * @returns comments of each story
  //  */
  // getComments = async (id) => {
  //   try {
  //     const comment = await axios.get(`${BASE_API_URL}/item/${id}.json`);
  //     return comment;
  //   } catch (e) {
  //     console.log("error");
  //   }
  // };

  render() {
    return (
      <div className="story-container">
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <ol type="1">
            {this.state.topStories.map((story) => (
              <Story key={story.data.id} storyData={story.data} />
            ))}
          </ol>
        )}
      </div>
    );
  }
}
