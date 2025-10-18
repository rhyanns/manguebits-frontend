// src/Components/Post/Post.tsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./stylePost.module.css";

interface PostProps {
  nomeGrupo: string;
  nomePerfil: string;
  legenda: string;
  post: string;
  tipo: "texto" | "imagem";
  dataPostagem: string;
  curtidas: number;
  comentarios: number;
  modo?: "home" | "perfilGrupo"; 
  idGroup: number;
}

function Post({
  nomeGrupo,
  nomePerfil,
  legenda,
  post,
  tipo,
  dataPostagem,
  curtidas,
  comentarios,
  modo = "home",
  idGroup
}: PostProps) {
  return (
    <div
      className={`${styles["p-078"]} ${styles.flex} ${styles["flex-column"]} ${styles["justify-center"]} ${styles["items-center"]} ${styles["w-full"]} ${styles["mt-2"]} ${styles["text-white"]} ${styles.fontPixel}`}
    >
      <div
        className={`${styles["p-078"]} ${styles["w-full"]} ${styles["bg-green-600"]} ${styles["radius-1"]} ${styles.flex} ${styles["flex-column"]}`}
      >
        {/* Cabeçalho */}
        <div
          className={`${styles["ft-16px"]} ${styles.flex} ${styles["h-40px"]} ${styles["items-center"]} ${styles["g-0-5"]}`}
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="User Avatar"
            className={`${styles["h-full"]} ${styles["rounded-full"]} ${styles["mr-2"]}`}
          />

          {/* Nome principal e secundário */}
          <div className={`${styles.flex} ${styles["flex-column"]}`}>
            {/* Nome principal */}
              <span className={styles["font-bold"]}>
                <Link
                  to={`/comunidade/${idGroup}`}
                  className={`${styles["font-bold"]} ${styles["text-white"]} ${styles["no-underline"]} ${styles["link-hover"]}`}
                >
                  {nomeGrupo}
                </Link>
              </span>

            {/* Nome secundário apenas se for dentro do perfil do grupo */}
            {modo === "perfilGrupo" && (
              <span className={`${styles["ft-12px"]} ${styles["opacity-80"]}`}>
                por {nomePerfil}
              </span>
            )}
          </div>

          <p className={`${styles["ft-12px"]} ${styles["ml-auto"]}`}>
            {new Date(dataPostagem).toLocaleString()}
          </p>
        </div>

        {/* Corpo */}
        <div className={`${styles.flex} ${tipo === "imagem" ? styles["items-center"] : ""}  ${styles["flex-column"]} ${styles["g-1"]} ${styles["flex-grow-1"]} ${styles["pt-1"]}`} >
          <span className={`${styles.flex} ${styles["w-full"]} ${styles["text-left"]}`}>
            {legenda}
          </span>

          {tipo === "imagem" ? (
            <img
              src={post}
              alt="Post"
              className={`${styles["w-full"]} ${styles["maxw-600px"]} ${styles["maxh-600px"]}`}
            />
          ) : (
            <p>{post}</p>
          )}
        </div>

        {/* Rodapé */}
        <div className={` ${styles["w-full"]} ${styles.flex} ${styles["items-center"]} ${styles["g-1"]} ${styles["flex-grow-1"]} ${styles["pt-2"]}`}>

          <button className={`${styles["ml-2"]} ${styles["btn"]}`}>Curtir ({curtidas})</button>
          <button className={`${styles["btn"]}`}>Comentar ({comentarios})</button>
          <button className={`${styles["btn"]}`}>Compartilhar</button>

        </div>
      </div>
    </div>
  );
}

export default Post;
