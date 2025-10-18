import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styleNavBar.module.css";

interface NavBarProps {
  onToggle?: (isOpen: boolean) => void;
}

function NavBar({ onToggle }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    onToggle?.(newState); // avisa o pai
  };

  return (
    <div className={`${styles.flex} ${styles["flex-col"]} ${styles["h-full"]} ${styles["bg-green-500"]}`}>
      {/* Ícone menu hamburguer */}
      <div className={`${styles.flex} ${styles["w-full"]} ${styles["justify-right"]} ${styles["p-05"]}`}>
        <div
          onClick={toggleMenu}
          className={`${styles.flex} ${styles["gap-03"]} ${styles["flex-col"]} ${styles["items-center"]} ${styles["cursor-pointer"]} ${styles["pointer"]}`}
        >
          <div className={`${styles["w-1"]} ${styles["h-02"]} ${styles["bg-black"]}`}></div>
          <div className={`${styles["w-1"]} ${styles["h-02"]} ${styles["bg-black"]}`}></div>
          <div className={`${styles["w-1"]} ${styles["h-02"]} ${styles["bg-black"]}`}></div>
        </div>
      </div>

      {/* Menu */}
      <ul
        className={`
          ${styles["flex"]}
          ${styles["flex-col"]}
          ${styles["mt-1"]}
          ${styles["w-10"]}
          ${!menuOpen ? styles["hidden"] : ""}
        `}
      >
        <li className={styles.navItem}><Link to="/">Home</Link></li>
        <li className={styles.navItem}> <Link to="/aderir">Aderir Comunidade</Link></li>
        <li className={styles.navItem}>Services</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
