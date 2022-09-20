import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello...</h1>
      <ul>
        <li>
          <Link href="/products">Check out our prodcts</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/kaka">Kaka Doo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
