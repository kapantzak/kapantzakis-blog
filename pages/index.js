import Head from "next/head";
import clientPromise from "../lib/mongodb";

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
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

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
