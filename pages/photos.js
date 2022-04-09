import Layout from "../Layout/Layout";
import { getDataList } from "../lib/api";
import styles from "../styles/Photos.module.css";
import Link from "next/link";
import Head from "next/head";

const Photo = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`}>
      <div className={styles.photoBox}>
        <span>{photo.title}</span>
      </div>
    </Link>
  );
};

const Photos = ({ photos }) => {
  return (
    <Layout>
      <main className="container">
        <Head>
          <title>Photos</title>
        </Head>
        <div className={styles.photos}>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Photos;

export async function getStaticProps() {
  const allPhotos = await getDataList("photos");
  const photos = allPhotos.slice(0, 10);
  return {
    props: { photos },
  };
}
