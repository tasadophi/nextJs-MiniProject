import Head from "next/head";
import Layout from "../../Layout/Layout";
import { getPaths, getData, makeSingle } from "../../lib/api";
import styles from "../../styles/Content.module.css";

const contentBoxes = {
  users: () => ["name", "username", "email", "phone", "website"],
  comments: () => ["name", "email", "body"],
  posts: () => ["title", "body"],
  photos: () => ["title", "url"],
};

const Content = ({ content, routeName }) => {
  const contentBoxArrey = contentBoxes[routeName]();
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>
            {makeSingle(routeName)} {content.id}
          </title>
        </Head>
        <div className={styles.content}>
          <h1>
            {makeSingle(routeName)} number {content.id}
          </h1>
          <div className={styles.contentDesc}>
            {routeName === "photos" ? (
              <>
                <span key={content.id}>{content.title}</span>
                <img src={content.url} alt={content.title} />
              </>
            ) : (
              contentBoxArrey.map((contentKey) => (
                <span key={content.id}>{content[contentKey]}</span>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const content = await getData(params.contents, params.id);
  return {
    props: { content, routeName: params.contents },
  };
}

export default Content;
