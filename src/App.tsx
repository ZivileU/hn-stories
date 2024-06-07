import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoryList from "./components/StoryList/StoryList";
import "./App.scss";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="appHeader">
          <h1>Today's Top Hacker News!</h1>
        </header>
        <StoryList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
