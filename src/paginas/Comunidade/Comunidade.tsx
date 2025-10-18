import { useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import PerfilComunidade from "../../Components/PerfilComunidade/PerfilComunidade";
import FormPost from "../../Components/FormPost/FormPost";
import { communities } from "../../assets/data/dataCommunities";
import { posts as initialPosts } from "../../assets/data/dataPost";
import styles from "./styleComunidade.module.css";

function Comunidades() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [posts, setPosts] = useState(initialPosts);

  const { id } = useParams<{ id: string }>();
  const communityId = Number(id);

  const community = communities.find((c) => c.id === communityId);

  // comunidade não existe
  if (!community) {
    return (
      <div
        className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["bg-green-300"]} ${styles.hidden} ${styles["dvh-full"]} ${styles.fontPixel}`}
      >
        <Header />
        <div
          className={`${styles.flex} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pb-2"]}`}
        >
          <div className={`${styles["h-full"]}`}>
            <NavBar onToggle={setMenuOpen} />
          </div>

          <div
            className={`${styles.flex} ${styles["flex-col"]} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pt-2"]} ${
              menuOpen ? styles["padding-right-10"] : ""
            }`}
          >
            <div
              className={`${styles.flex} ${styles["items-center"]} ${styles["justify-center"]} ${styles["w-full"]} ${styles["h-screen"]} ${styles["bg-green-300"]} ${styles.fontPixel} ${styles["text-white"]}`}
            >
              Grupo não encontrado
            </div>
          </div>
        </div>
      </div>
    );
  }

  const filteredPosts = posts.filter((p) => p.idComunidade === communityId);

  return (
    <div
      className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["bg-green-300"]} ${styles.hidden} ${styles["dvh-full"]} ${styles.fontPixel}`}
    >
      <Header />
      <div
        className={`${styles.flex} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pb-2"]}`}
      >
        <div className={`${styles["h-full"]}`}>
          <NavBar onToggle={setMenuOpen} />
        </div>

        <div
          className={`${styles.flex} ${styles["flex-col"]} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pt-2"]} ${
            menuOpen ? styles["padding-right-10"] : ""
          }`}
        >
          <div
            className={`${styles["border"]} ${styles.flex} ${styles["flex-col"]} ${styles["mt-5"]} ${styles["bg-green-370"]} ${styles["w-full"]} ${styles["minw-370px"]} ${styles["maxw-1080px"]} ${styles["color-white"]} ${styles.fontPixel} ${styles["radius-2-2"]}`}
          >
            <PerfilComunidade community={community} />
          </div>

          <div
            className={`${styles["border"]} ${styles["bg-green-500"]} ${styles["overflow-y-scroll"]} ${styles["w-full"]} ${styles["minw-370px"]} ${styles["maxw-1080px"]} ${styles["color-white"]} ${styles["h-full"]} ${styles["mobile-scroll"]} ${styles["pt-1"]} ${styles["pb-2"]} ${styles["gap-2"]}`}
          >
            <FormPost
              communityId={communityId}
              community={community}
              posts={posts}
              setPosts={setPosts}
            />


            {filteredPosts.length > 0 ? (
              filteredPosts.map((p, index) => (
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
              ))
            ) : (
              <div className={styles["no-posts"]}>
                Nenhum post ainda nessa comunidade.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunidades;
