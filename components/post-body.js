import cn from "classnames";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";

const renderers = {
  image: (image) => {
    const [src, width, height, layout] = image.src.split("|");
    return (
      <figure
        className={cn("p-5", {
          "max-w-2xl mx-auto": layout === "single",
          "float-left w-1/2": layout === "double",
          "float-left w-1/3": layout === "triple",
          "float-left w-1/4": layout === "quad",
          "float-left w-1/5": layout === "hep",
        })}
      >
        <Image src={src} alt={image.alt} height={height} width={width} />
      </figure>
    );
  },
  paragraph: (paragraph) => {
    const { node } = paragraph;
    if (node.children[0].type === "image") {
      const image = node.children[0];
      const [src, width, height, layout] = image.url.split("|");
      return (
        <figure
          className={cn("p-5", {
            "max-w-2xl mx-auto": layout === "single",
            "float-left w-1/2": layout === "double",
            "float-left w-1/3": layout === "triple",
            "float-left w-1/4": layout === "quad",
            "float-left w-1/5": layout === "hep",
          })}
        >
          <Image
            src={src}
            alt={image.alt}
            height={height || 400}
            width={width || 600}
          />
        </figure>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};

export default function PostBody({ content }) {
  return (
    <div className="px-4 lg:px-12">
      <ReactMarkdown
        className={markdownStyles["markdown"]}
        children={content}
        renderers={renderers}
        allowDangerousHtml
      />
    </div>
  );
}
