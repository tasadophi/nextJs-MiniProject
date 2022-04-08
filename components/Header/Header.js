import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/pages/index.js">Users</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/pages/index.js">Comments</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
