import Head from "next/head";
import Layout from "../Layout/Layout";
import styles from "../styles/Home.module.css";
import { BiComment, BiUser, BiAlbum } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>Home Page</title>
        </Head>
        <div className={styles.grid}>
          <Link href="/users">
            <div className={styles.box}>
              <BiUser className={styles.icon} />
              <span>See users</span>
            </div>
          </Link>
          <Link href="/comments">
            <div className={styles.box}>
              <BiComment className={styles.icon} />
              <span>See Comments</span>
            </div>
          </Link>
          <Link href="/posts">
            <div className={styles.box}>
              <BiComment className={styles.icon} />
              <span>See Posts</span>
            </div>
          </Link>
          <Link href="/albums">
            <div className={styles.box}>
              <BiAlbum className={styles.icon} />
              <span>See Albums</span>
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
