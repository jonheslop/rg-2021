import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="px-5 md:px-8" id="work">
      <h2 className="mb-8 text-4xl font-black tracking-tighter leading-tight">
        Recent work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 gap-y-20 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            coverImageHeight={post.coverImageHeight}
            coverImageWidth={post.coverImageWidth}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            season={post.season}
            company={post.company}
          />
        ))}
      </div>
    </section>
  );
}
