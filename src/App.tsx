import React from "react";
import { useGetStoryIds } from "./api/queries";
import { filterRandomItems } from "./utilities/utilities";
import StoryList from "./components/StoryList/StoryList";
import "./App.scss";

const App = () => {
  const { data, isError, isLoading } = useGetStoryIds();
  const filteredStoryIds = data && filterRandomItems(data, 10);

  if (isError) {
    return (
      <div className="loading">
        Error while getting stories, try reloading the page
      </div>
    );
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="appHeader">
        <h1>Today's Top Hacker News!</h1>
      </header>
      <StoryList storyIds={filteredStoryIds} />
    </div>
  );
};

export default App;
