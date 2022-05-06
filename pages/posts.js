import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <>
      <h1>Blog</h1>

      <ul>
        {posts.map(({ slug, data: { title } }) => {
          return (
            <li key={slug}>
              <Link href={`post/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const files = fs.readdirSync("posts");

  const posts = files.map(fileName => {
    const slug = fileName.replace(/.md$/, "");
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
