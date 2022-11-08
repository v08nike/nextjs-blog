import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Dunan]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.data.map((item, index) => (
            <li className={utilStyles.listItem} key={index}>
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = await getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getServerSideProps(connect) {
  const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

  return {
    props: {
      allPostsData: res.json(),
    },
  };
}