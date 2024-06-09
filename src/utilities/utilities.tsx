import { StoryData } from "../types/StoryData";

export const filterRandomItems = (data: number[], maxItems: number) => {
  let items: number[] = [];

  for (let i = 0; i < maxItems; i++) {
    const randomIndex = Math.floor(Math.random() * data.length - 1);
    const randomItem = data[randomIndex];
    items.push(randomItem);
  }

  return items;
};

export const sortByScore = (stories: StoryData[]) =>
  stories &&
  [...stories].sort((a: StoryData, b: StoryData) => {
    return b.data?.score - a.data?.score;
  });
