import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  season,
}) {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={1260} width={2100} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-gray-500">
          <DateFormatter season={season} dateString={date} />
        </div>
      </div>
    </>
  );
}
