import { useQuery } from "@tanstack/react-query";
import { getStories, getStory, getUser } from "./api";

export const useGetStoryIds = () => {
  return useQuery({ queryKey: ["storyIds"], queryFn: getStories });
};

export const useGetStory = (id: number) => {
  return useQuery({
    queryKey: ["story", id],
    queryFn: () => getStory(id),
    enabled: !!id,
  });
};

export const useGetUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
