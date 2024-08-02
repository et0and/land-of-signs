import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  nzhHeadline: string;
  rnzHeadline: string;
  bdHeadline: string;
  thepostHeadline: string;
  newsHeadline: string;
  nrHeadline: string;
  spinoffHeadline: string;
}

const Home = ({
  nzhHeadline,
  rnzHeadline,
  bdHeadline,
  thepostHeadline,
  newsHeadline,
  nrHeadline,
  spinoffHeadline,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Headline</title>
        <meta property="og:title" content="Headline" key="title" />
        <meta property="twitter:title" content="Headline" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          property="description"
          content="Away the stains of the line for a hiccup of the heart"
        />
        <meta
          property="og:description"
          content="Away the stains of the line for a hiccup of the heart"
        />
        <meta
          property="twitter:description"
          content="Away the stains of the line for a hiccup of the heart"
        />
        <meta property="og:url" content="https://work.tom.so/headline" />
        <meta property="og:image" content="/headline/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/headline/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/headline/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/headline/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/headline/favicon-16x16.png"
        />
        <link rel="manifest" href="/headline/site.webmanifest" />
      </Head>
      <main
        className={`flex md:min-h-screen flex-col items-center dark:bg-black dark:text-white bg-white text-black justify-between p-4 md:p-24 ${inter.className}`}
      >
        <h1 className="text-5xl md:text-8xl font-extrabold">
          &quot;{nzhHeadline}&quot;
        </h1>
        <h1 className="text-5xl md:text-8xl font-extrabold">
          &quot;{rnzHeadline}&quot;
        </h1>
        <h1 className="text-5xl md:text-8xl font-extrabold">
          &quot;{bdHeadline}&quot;
        </h1>
        <h1 className="text-5xl md:text-8xl font-extrabold">
          &quot;{newsHeadline}&quot;
        </h1>
        <h1 className="text-5xl md:text-8xl font-extrabold">
          &quot;{thepostHeadline}&quot;
        </h1>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");

  const nzhHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "nzh.txt"),
    "utf-8"
  );

  const rnzHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "rnz.txt"),
    "utf-8"
  );

  const bdHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "bd.txt"),
    "utf-8"
  );

  const newsHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "1news.txt"),
    "utf-8"
  );

  const thepostHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "thepost.txt"),
    "utf-8"
  );

  const nrHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "nr.txt"),
    "utf-8"
  );

  const spinoffHeadline = fs.readFileSync(
    path.join(process.cwd(), "data", "spinoff.txt"),
    "utf-8"
  );

  return {
    props: {
      nzhHeadline,
      rnzHeadline,
      bdHeadline,
      newsHeadline,
      thepostHeadline,
      nrHeadline,
      spinoffHeadline,
    },
  };
};
