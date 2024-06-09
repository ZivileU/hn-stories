import { useGetStories } from "../../api/queries";
import Story from "../Story/Story";
import { StoryData } from "../../types/StoryData";
import { sortByScore } from "../../utilities/utilities";
import "./StoryList.scss";

const StoryList = ({ storyIds }: { storyIds: number[] }) => {
  const stories = useGetStories(storyIds);

  const sortedStories = sortByScore(stories);

  return (
    <div className="storyList">
      {sortedStories.map((story: StoryData) => {
        return story.data && <Story key={story.data.id} story={story.data} />;
      })}
    </div>
  );
};

export default StoryList;
