import React, { Component } from "react";
import axios from "axios";
import CONSTANTS from "../../constants/appConstant";
import Story from "./../../components/Story/index";

const { BASE_API_URL } = CONSTANTS;
export default class TopStories extends Component {
  state = {
    topStories: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTopStories();
  }

  fetchTopStories = async () => {
    try {
      const { data: topStoriesIds } = await axios.get(
        `${BASE_API_URL}/beststories.json`
      );
      const stories = await Promise.all(
        topStoriesIds.slice(0, 20).map((storyId) => this.getStory(storyId))
      );
      console.log(stories);
      this.setState({ topStories: stories, isLoading: false });
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
