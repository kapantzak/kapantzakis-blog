import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>John Kapantzakis</h1>

      <Link href="/posts">
        <a>Blog</a>
      </Link>
    </>
  );
};

export default Home;
