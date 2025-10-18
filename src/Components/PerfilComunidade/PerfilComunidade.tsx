import type { Community } from "../../assets/data/dataCommunities";
import { useState } from "react";
import styles from "./stylePerfilComunidade.module.css";

interface PerfilComunidadeProps {
  community: Community;
}

function PerfilComunidade({ community }: PerfilComunidadeProps) {
  return (
    <>
      <div className={`${styles['w-full']} ${styles['p-078']}`}>
        <div className={`${styles.flex} ${styles['flex-col']} ${styles['w-full']}`}>
            
          <div className={`${styles['maxh-190']} ${styles['w-full']} ${styles.hidden} ${styles['radius-1']}`}>
            <img className={`${styles['w-full']}`} src={community.bannerUrl} alt={community.nome} />
          </div>

          <div className={`${styles.flex} ${styles['g-2']} ${styles['w-full']} ${styles["plr-2"]} ${styles['p-40px']} ${styles['justify-between']} ${styles['items-center']}`}>
            <div className={`${styles.flex} ${styles['items-center']} ${styles['justify-center']} ${styles['g-05']} ${styles['h-2']}`}>
              <img src={community.avatarUrl} alt={community.nome} className={`${styles['mb-3']} ${styles['w-4']} ${styles['h-4']} ${styles['rounded-full']}`} />
              <span className={`${styles['tsize-1']} ${styles.fontPixel}`}>{community.nome}</span>
            </div>

            <div className={`${styles.flex} ${styles['items-center']} ${styles['justify-center']} ${styles['g-07']}`}>
              <button className={`${styles["btn"]} ${styles['bg-green-400']} ${styles.flex} ${styles['items-center']} ${styles['justify-center']} ${styles['p-2']} ${styles['h-1-5']} ${styles['tsize-1']} ${styles.fontPixel}`}>{community.seguindo ? "Seguindo" : "Seguir"}</button>
              <button className={`${styles["btn"]} ${styles['bg-green-400']} ${styles.flex} ${styles['items-center']} ${styles['justify-center']} ${styles['p-2']} ${styles['h-1-5']} ${styles['tsize-1']} ${styles.fontPixel}`}>Premium</button>
            </div>

          </div>
        </div>
      
      </div>
    </>
  );
}

export default PerfilComunidade;
