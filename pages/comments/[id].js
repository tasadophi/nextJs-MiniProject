import Head from "next/head";
import Layout from "../../Layout/Layout";
import { getPaths, getData } from "../../lib/api";
import styles from "../../styles/Comment.module.css";

const Comment = ({ comment }) => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Comment {comment.id}</title>
        </Head>
        <div className={styles.comment}>
          <h1>Comment number {comment.id}</h1>
          <div className={styles.commentDesc}>
            <span>Name: {comment.name}</span>
            <span>Email: {comment.email}</span>
            <br/>
            <span>{comment.body}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths("comments");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const comment = await getData("comments", params.id);
  return {
    props: { comment },
  };
}

export default Comment;
