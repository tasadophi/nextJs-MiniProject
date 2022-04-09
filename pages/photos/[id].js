import Head from "next/head";
import Image from "next/image";
import Layout from "../../Layout/Layout";
import { getPaths, getData } from "../../lib/api";
import styles from "../../styles/Photo.module.css";

const Photo = ({ photo }) => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Photo {photo.id}</title>
        </Head>
        <div className={styles.photo}>
          <h1>Photo number {photo.id}</h1>
          <div className={styles.photoDesc}>
            <span>{photo.title}</span>
            <br />
            <img src={photo.url} alt={photo.title} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths("photos");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const photo = await getData("photos", params.id);
  return {
    props: { photo },
  };
}

export default Photo;
