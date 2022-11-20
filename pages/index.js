import Head from "next/head";
import Home from "../pages/Home/Home";

export default function APP() {
  return (
    <div>
      <Head>
        <title> ניהול כסף פנוי</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="noreferrer" href="" />
      </Head>
      <Home />
    </div>
  );
}
