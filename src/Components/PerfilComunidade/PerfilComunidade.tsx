import type { Community } from "../../assets/data/dataCommunities";
import styles from "./stylePerfilComunidade.module.css";
import avatarPadrao from "../../assets/img/icon-default.png";
import bannerPadrao from "../../assets/img/banner-default.jpg";

interface PerfilComunidadeProps {
  community: Community;
}

function PerfilComunidade({ community }: PerfilComunidadeProps) {
  return (
    <div className={`${styles["w-full"]} ${styles["p-078"]}`}>
      {/* Banner fixo */}
      <div className={`${styles["banner-container"]}`}>
        <img
          className={`${styles["banner-image"]}`}
          src={bannerPadrao}
          alt="Banner da comunidade"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Perfil e informações */}
      <div className={`${styles["profile-content"]}`}>
        <div className={`${styles["profile-header"]}`}>
          {/* Avatar fixo */}
          <div className={styles["avatar-container"]}>
            <img
              src={avatarPadrao}
              alt="Avatar da comunidade"
              className={styles["avatar-image"]}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Informações */}
          <div className={styles["community-info"]}>
            <h1 className={styles["community-name"]}>{community.nome}</h1>

            <p className={styles["community-description"]}>
              {community.descricao}
            </p>

            <div className={styles["category"]}>
              Categoria: {community.categoria}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PerfilComunidade;
