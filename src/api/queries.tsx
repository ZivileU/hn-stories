import { useQueries, useQuery } from "@tanstack/react-query";
import { getStories, getStory, getUser } from "./api";

export const useGetStoryIds = () => {
  return useQuery({
    queryKey: ["storyIds"],
    queryFn: getStories,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};

export const useGetStories = (filteredStoryIds: number[]) => {
  const data = useQueries({
    queries: filteredStoryIds
      ? filteredStoryIds.map((id: number) => {
          return {
            queryKey: ["stories", id],
            queryFn: () => getStory(id),
            enabled: !!id,
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
          };
        })
      : [],
  });

  const stories = data.map((story) => {
    return {
      data: story.data,
      isError: story.isError,
      isLoading: story.isLoading,
    };
  });

  return stories;
};

export const useGetUser = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
    enabled: !!username,
  });
};
