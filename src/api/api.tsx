import axios from "axios";

export const getStories = async () => {
  const response = await axios({
    method: "get",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json",
  });

  return response.data;
};

export const getStory = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  });

  return response.data;
};

export const getUser = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
  });

  return response.data;
};
