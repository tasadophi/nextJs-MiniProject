import Head from "next/head";
import Layout from "../../Layout/Layout";
import { getPaths, getData } from "../../lib/api";
import styles from "../../styles/Post.module.css";

const Post = ({ post }) => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Post {post.id}</title>
        </Head>
        <div className={styles.post}>
          <h1>Post number {post.id}</h1>
          <div className={styles.postDesc}>
            <span>{post.title}</span>
            <br />
            <span>{post.body}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths("posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getData("posts", params.id);
  return {
    props: { post },
  };
}

export default Post;
