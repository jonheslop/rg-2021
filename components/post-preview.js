import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  coverImageHeight,
  coverImageWidth,
  date,
  excerpt,
  slug,
  season,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={coverImageHeight}
          width={coverImageWidth}
        />
      </div>
      <h3 className="text-2xl font-medium mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="font-medium mb-4 text-gray-500">
        <DateFormatter season={season} dateString={date} />
      </div>
      <p className="font-medium leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
