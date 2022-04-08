import Layout from "../Layout/Layout";
import { getDataList } from "../lib/api";
import styles from "../styles/Users.module.css";
import Link from "next/link";
import Head from "next/head";

const User = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`}>
      <div className={styles.userBox}>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
    </Link>
  );
};

const Users = ({ users }) => {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>Users</title>
        </Head>
        <div className={styles.users}>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Users;

export async function getStaticProps() {
  const users = await getDataList("users");
  return {
    props: { users },
  };
}
