import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuList = () => setShowMenu(true);
  const hideMenuList = () => setShowMenu(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.iconBox}>
          <BiMenu className={styles.icon} onClick={showMenuList} />
        </div>
        <div className={`${styles.menu} ${showMenu && styles.showMenu}`}>
          <div className={styles.iconBox}>
            <BiX
              className={`${styles.icon} ${styles.close}`}
              onClick={hideMenuList}
            />
          </div>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/users">Users</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/comments">Comments</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/posts">Posts</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/photos">Photos</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
