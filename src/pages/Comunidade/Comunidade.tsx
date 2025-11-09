import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PerfilComunidade from "../../components/PerfilComunidade/PerfilComunidade";
import FormPost from "../../components/FormPost/FormPost";
import styles from "./styleComunidade.module.css";
import { getComunidade } from "../../services/helpers/comunidade";
import type { Community } from "../../assets/data/dataCommunities";

function Comunidade() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [community, setCommunity] = useState<Community | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const communityId = Number(id);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const data = await getComunidade(communityId);
        setCommunity(data);
      } catch (error) {
        console.error("Erro ao buscar comunidade:", error);
      } finally {
        setLoading(false);
      }
    };

    if (communityId) fetchCommunity();
  }, [communityId]);

  if (loading) {
    return <div>Carregando comunidade...</div>;
  }

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
              Comunidade não encontrada
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Página principal
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
              posts={[]} // sem posts por enquanto
              setPosts={() => {}} // placeholder
            />

            <div className={styles["no-posts"]}>
              Nenhum post ainda nessa comunidade.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunidade;
