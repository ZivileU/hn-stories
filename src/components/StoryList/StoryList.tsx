import { useGetStoryIds } from "../../api/queries";
import { filterRandomItems } from "../../utilities/utilities";
import Story from "../Story/Story";
import "./StoryList.scss";

const StoryList = () => {
  const { data, isError, isLoading } = useGetStoryIds();
  const filteredStoryIds = data && filterRandomItems(data, 10);

  if (isError) {
    return <div>Error while getting stories, try reloading the page</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="storyList">
      {filteredStoryIds.map((storyId: number) => {
        return <Story key={storyId} id={storyId} />;
      })}
    </div>
  );
};

export default StoryList;
