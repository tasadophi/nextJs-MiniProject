import Layout from "../Layout/Layout";
import { getDataList } from "../lib/api";
import styles from "../styles/Comments.module.css";
import Link from "next/link";
import Head from "next/head";

const Comment = ({ comment }) => {
  return (
    <Link href={`/comments/${comment.id}`}>
      <div className={styles.commentBox}>
        <span>{comment.name}</span>
        <span>{comment.email}</span>
      </div>
    </Link>
  );
};

const Comments = ({ comments }) => {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>Comments</title>
        </Head>
        <div className={styles.comments}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Comments;

export async function getStaticProps() {
  const allComments = await getDataList("comments");
  const comments = allComments.slice(0, 10);
  return {
    props: { comments },
  };
}
