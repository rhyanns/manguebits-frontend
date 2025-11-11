import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./styleHome.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import { retornarPostsDeTodasAsComunidades } from "../../services/helpers/posts";
import type { Posts } from "../../types/Posts";
import type { Comunidade } from "../../types/Comunidade";

function AderirComunidade() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [comunidades, setComunidades] = useState<Comunidade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComunidades() {
      try {
        const response = await retornarPostsDeTodasAsComunidades();
        const comunidadesComPosts = response.data.filter(
          (c: any) => c.posts && c.posts.length > 0
        );
        setComunidades(comunidadesComPosts);
      } catch (error) {
        console.error("Erro ao buscar comunidades:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchComunidades();
  }, []);

  if (loading) {
    return (
      <div
        className={`${styles.flex} ${styles["items-center"]} ${styles["justify-center"]} ${styles["h-screen"]}`}
      >
        <p className={`${styles["text-white"]}`}>Carregando...</p>
      </div>
    );
  }

  if (!comunidades.length) {
    return (
      <div
        className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["bg-green-300"]} ${styles["dvh-full"]} ${styles.fontPixel}`}
      >
        <Header />
        <div
          className={`${styles.flex} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pb-2"]}`}
        >
          <NavBar onToggle={setMenuOpen} />
          <div
            className={`${styles.flex} ${styles["items-center"]} ${styles["justify-center"]} ${styles["w-full"]} ${styles["h-screen"]} ${styles["bg-green-300"]} ${styles["text-white"]}`}
          >
            Você ainda não segue nenhuma comunidade.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["bg-green-300"]} ${styles["dvh-full"]} ${styles.fontPixel}`}
    >
      <Header />
      <div
        className={`${styles.flex} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pb-2"]}`}
      >
        <NavBar onToggle={setMenuOpen} />

        <div
          className={`${styles.flex} ${styles["flex-col"]} ${styles["items-center"]} ${styles["w-full"]} ${styles["h-full"]} ${styles["pt-2"]} ${styles["gap-2"]} ${
            menuOpen ? styles["padding-right-10"] : ""
          }`}
        >
          <div
            className={`${styles["border"]} ${styles["bg-green-500"]} ${styles["overflow-y-scroll"]} ${styles["w-full"]} ${styles["maxw-1080px"]} ${styles["color-white"]} ${styles["h-full"]} ${styles["mobile-scroll"]} ${styles["pt-1"]} ${styles["pb-2"]}`}
          >
            {comunidades.map((comunidade) => {
              // pega nome do usuário do localStorage
              const usuarioNome =
                localStorage.getItem("usar") || "Usuário do Post";

              return (
                <div key={comunidade.id} className={`${styles["w-full"]} ${styles["mb-4"]}`}>
                  {/* Posts da comunidade */}
                  {comunidade.posts.length > 0 ? (
                    comunidade.posts.map((p) => (
                      <Post
                        key={p.idPost}
                        idPost={p.idPost}
                        nomeGrupo={comunidade.nome}
                        nomePerfil={usuarioNome}
                        post={p.conteudo}
                        tipo="texto"
                        dataPostagem={p.createdAt}
                        curtidas={p.curtidas}
                        comentarios={0}
                        modo="home"
                        idGroup={comunidade.id}
                      />
                    ))
                  ) : (
                    <p className={`${styles["text-center"]}`}>
                      Nenhum post ainda nesta comunidade.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AderirComunidade;