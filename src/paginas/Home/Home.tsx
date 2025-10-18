import { useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "./styleHome.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import Post from "../../Components/Post/Post";
import {posts} from "../../assets/data/dataPost";

function AderirComunidade() {
  const [menuOpen, setMenuOpen] = useState(true);

    if (!posts) {
    return (
      <div className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["bg-green-300"]} ${styles.hidden} ${styles["dvh-full"]} ${styles.fontPixel}`}>
        <Header />
        <div className={`${styles.flex} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pb-2"]}`}>
          <div className={`${styles["h-full"]}`}>
            <NavBar onToggle={setMenuOpen} />
          </div>

          <div className={`${styles.flex} ${styles["flex-col"]} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pt-2"]} ${menuOpen ? styles["padding-right-10"] : ""}`}>
            <div className={`${styles.flex} ${styles["items-center"]} ${styles["justify-center"]} ${styles["w-full"]} ${styles["h-screen"]} ${styles["bg-green-300"]} ${styles.fontPixel} ${styles["text-white"]}`}>
              Você ainda não seguiu nenhuma comunidade.
            </div>
          </div>
        </div>
      </div>

    );
  }

  return (
    <>
      <div className={`${styles.flex} ${styles['flex-col']} ${styles['w-full']} ${styles['bg-green-300']} ${styles.hidden} ${styles['dvh-full']} ${styles.fontPixel}`}>
        <Header />
        <div className={`${styles.flex} ${styles['items-center']} ${styles['w-full']} ${styles['h-full']} ${styles['pb-2']}`}>
          <div className={`${styles['h-full']}`}>
            <NavBar onToggle={setMenuOpen}/>
          </div>

          <div className={`${styles.flex} ${styles['flex-col']} ${styles['items-center']} ${styles['w-full']} ${styles['h-full']} ${styles['pt-2']} ${styles['gap-2']}  ${menuOpen ? styles["padding-right-10"] : ""}`}>
            <div className={`${styles['border']} ${styles.flex} ${styles['items-center']} ${styles["mt-5"]} ${styles['bg-green-370']} ${styles['minh-5rem']} ${styles['w-full']} ${styles['minw-370px']} ${styles['maxw-1080px']} ${styles['color-white']} ${styles.fontPixel} ${styles['radius-2-2']}`}>
                <div className={`${styles.flex} ${styles['items-center']} ${styles['p-4']} ${styles['plr-4']} ${styles['w-full']}`}>
                  <select className="" name="" id="">
                    <option value="" disabled>Ordernar Por</option>
                    <option value="">Melhores</option>
                  </select>
                </div>
            </div>

            <div className={`${styles['border']} ${styles['bg-green-500']} ${styles['overflow-y-scroll']} ${styles['w-full']} ${styles['minw-370px']} ${styles['maxw-1080px']} ${styles['color-white']} ${styles['h-full']} ${styles['mobile-scroll']} ${styles['pt-1']} ${styles['pb-2']}`}>
              {posts.map((p, index) => (
                <Post
                  key={index}
                  nomeGrupo={p.nomeGrupo}
                  nomePerfil={p.nomePerfil}
                  legenda={p.legenda}
                  post={p.post}
                  tipo={p.tipo}
                  dataPostagem={p.dataPostagem}
                  curtidas={p.curtidas}
                  comentarios={p.comentarios}
                  modo="home"
                  idGroup={p.idComunidade}
                />
              ))}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default AderirComunidade;
