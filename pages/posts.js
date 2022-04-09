import Layout from "../Layout/Layout";
import { getDataList } from "../lib/api";
import styles from "../styles/Posts.module.css";
import Link from "next/link";
import Head from "next/head";

const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className={styles.postBox}>
        <span>{post.title}</span>
        <span>{post.body}</span>
      </div>
    </Link>
  );
};

const Posts = ({ posts }) => {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>Posts</title>
        </Head>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Posts;

export async function getStaticProps() {
  const allPosts = await getDataList("posts");
  const posts = allPosts.slice(0, 10);
  return {
    props: { posts },
  };
}
