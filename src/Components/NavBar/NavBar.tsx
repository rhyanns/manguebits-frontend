import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styleNavBar.module.css";
import { listarComunidadesdoParticipante } from "../../services/helpers/participantes"; // ajuste o caminho conforme seu projeto
import type { Community } from "../../assets/data/dataCommunities";

interface NavBarProps {
  onToggle?: (isOpen: boolean) => void;
}

function NavBar({ onToggle }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [comunidades, setComunidades] = useState<Community[]>([]);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    onToggle?.(newState);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      const idParticipante = parsedUser.id;

      listarComunidadesdoParticipante(idParticipante)
        .then((response: { data: React.SetStateAction<Community[]>; }) => setComunidades(response.data))
        .catch((error: any) => console.error("Erro ao carregar comunidades:", error));
    }
  }, []);

  return (
    <div
      className={`${styles.flex} ${styles["flex-col"]} ${styles["h-full"]} ${styles["bg-green-500"]}`}
    >
      {/* Ícone menu hamburguer */}
      <div
        className={`${styles.flex} ${styles["w-full"]} ${styles["justify-right"]} ${styles["p-05"]}`}
      >
        <div
          onClick={toggleMenu}
          className={`${styles.flex} ${styles["gap-03"]} ${styles["flex-col"]} ${styles["items-center"]} ${styles["cursor-pointer"]}`}
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
        <li className={styles.navItem}><Link to="/aderir">Aderir Comunidade</Link></li>
        <li className={styles.navItem}><Link to="/criar-comunidade">Criar Comunidade</Link></li>

        <li
          className={`${styles.navItem} ${styles.dropdown}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ cursor: "pointer" }}
        >
          Minhas Comunidades ▾
          {dropdownOpen && (
            <ul className={styles.dropdownList}>
              {comunidades.length > 0 ? (
                comunidades.map((c) => (
                  <li key={c.id} className={styles.dropdownItem}>
                    <Link to={`/comunidade/${c.id}`}>{c.nome}</Link>
                  </li>
                ))
              ) : (
                <li className={styles.dropdownItem}>Nenhuma comunidade</li>
              )}
            </ul>
          )}
        </li>

        <li className={styles.navItem}>Services</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
