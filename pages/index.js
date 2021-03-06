import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Nav from "../components/nav";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { SITE_TITLE } from "../lib/constants";

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const heroPost = null;
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container>
          <Nav />
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              coverImageWidth={heroPost.coverImageWidth}
              coverImageHeight={heroPost.coverImageHeight}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              season={heroPost.season}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageWidth",
    "coverImageHeight",
    "excerpt",
    "season",
    "company",
  ]);

  return {
    props: { allPosts },
  };
}
