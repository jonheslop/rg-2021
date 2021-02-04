import Container from "../components/container";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Head from "next/head";
import { SITE_TITLE } from "../lib/constants";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container>
          <Nav />
          <article className="grid grid-cols-1 md:grid-cols-2 md:gap-x-32 my-4 mb-32 md:my-32 md:mb-32 px-4 lg:px-12">
            <figure className="w-1/2 md:w-full mx-auto mb-8 md:mb-0">
              <Image
                src={"/assets/rebecca-goss.jpg"}
                alt={`A portrait of Bec}`}
                className="shadow-sm"
                width={768}
                height={768}
              />
            </figure>
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-8xl tracking-tight font-black leading-tight mb-8">
                Hello!
              </h1>
              <p className="text-xl leading-normal">
                I am a Senior UX Designer with 10 years of experience in the
                industry, working in both startups and large corporations.
                Exploring problems and putting the user at the centre of my work
                is something I am deeply passionate about. I thrive on finding
                solutions that are both creative and impactful, something I will
                continue to strive for in all areas of my work. In our ever
                increasing digital lives, I am excited to make a difference to
                people’s experiences within a cross functional and collaborative
                team.
              </p>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
}
