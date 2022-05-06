import Head from "next/head";
import dbConnect from "../lib/dbConnect";

export default function Home({ isConnected }) {
  return (
    <div>
      <Head>
        <title>John Kapantzakis | Home</title>
        <meta name="description" content="John Kapantzxakis portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Portfolio / Blog</h1>

        <p>I&apos;m a web developer</p>

        {isConnected && <p>DB connected</p>}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    await dbConnect();

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
