import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

const Post = ({ data, content }) => {
  const { title, date } = data;
  const htmlContent = md().render(content);

  return (
    <>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(/.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      data,
      content,
    },
  };
}
