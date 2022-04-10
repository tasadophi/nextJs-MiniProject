import Layout from "../../Layout/Layout";
import { capitalize, getDataList, getMainPaths } from "../../lib/api";
import styles from "../../styles/Contents.module.css";
import Link from "next/link";
import Head from "next/head";

const contentBoxes = {
  users: () => ["name", "email"],
  comments: () => ["name", "email"],
  posts: () => ["title", "body"],
  photos: () => ["title"],
};

const Content = ({ content, routeName }) => {
  const contentBoxArrey = contentBoxes[routeName]();
  return (
    <Link href={`/${routeName}/${content.id}`}>
      <div className={styles.contentBox}>
        {contentBoxArrey.map((contentKey) => (
          <span key={content.id}>{content[contentKey]}</span>
        ))}
      </div>
    </Link>
  );
};

const Contents = ({ contents, routeName }) => {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>{capitalize(routeName)}</title>
        </Head>
        <div className={styles.contents}>
          {contents.map((content) => (
            <Content key={content.id} content={content} routeName={routeName} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Contents;

export async function getStaticPaths() {
  const paths = getMainPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const contents = await getDataList(params.contents);
  return {
    props: { contents, routeName: params.contents },
  };
}
