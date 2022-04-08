import Head from "next/head";
import Layout from "../../Layout/Layout";
import { getPaths, getUser } from "../../lib/api";
import styles from "../../styles/User.module.css";

const User = ({ user }) => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>User {user.id}</title>
        </Head>
        <div className={styles.user}>
          <h1>User number {user.id}</h1>
          <div className={styles.userDesc}>
            <span>Name: {user.name}</span>
            <span>UserName: {user.username}</span>
            <span>Email: {user.email}</span>
            <span>Phone: +{user.phone}</span>
            <span>Website: {user.website}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths("users");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const user = await getUser(params.id);
  return {
    props: { user },
  };
}

export default User;
