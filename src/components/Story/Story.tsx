import moment from "moment";
import { useGetStory, useGetUser } from "../../api/queries";
import { images } from "../../assets/images";
import "./Story.scss";

interface StoryProps {
  id: number;
}

const Story = ({ id }: StoryProps) => {
  const { data: story, isError, isLoading } = useGetStory(id);
  const userName = story?.by;
  const { data: user, isLoading: isUserLoading } = useGetUser(userName);
  const formattedTime = moment.unix(story?.time).format("MM/DD/YYYY");

  if (isError) {
    return <div>Error while getting the story</div>;
  }

  if (!story || story.deleted || story.dead) {
    return null;
  }

  return (
    <div className="story">
      {!isLoading && !isUserLoading && (
        <>
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            alt="neon sign"
            loading="lazy"
          />
          <div className="info">
            <div className="title">{story.title || "-"}</div>
            <div>
              Url:{" "}
              <a
                href={story.url}
                target="blank"
                aria-label="link to the article"
              >
                {story.url || "-"}
              </a>
            </div>
            <div>Created at: {formattedTime || "-"}</div>
            <div>Score: {story.score || "-"}</div>
            <div>Author: {story.by || "-"}</div>
            {user && <div>Author karma score: {user.karma || "-"}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default Story;
