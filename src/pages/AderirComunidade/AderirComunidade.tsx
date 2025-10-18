import { useState } from "react";
import Header from "../../components/Header/Header";
import CardComunidade from "../../components/CardComunidade/CardComunidade";
import styles from "./styleAderirComunidade.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { communities } from "../../assets/data/dataCommunities";
import type { Community } from "../../assets/data/dataCommunities";

function AderirComunidade() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [comunidades, setComunidades] = useState<Community[]>(communities);

  const toggleSeguir = (id: number) => {
    setComunidades(prev =>
      prev.map(comunidade =>
        comunidade.id === id ? { ...comunidade, seguindo: !comunidade.seguindo } : comunidade
      )
    );
  };

  return (
    <div className={`${styles.flex} ${styles['flex-col']} ${styles['w-full']} ${styles['bg-green-300']} ${styles.hidden} ${styles['dvh-full']} ${styles.fontPixel}`}>
      <Header />
      <div className={`${styles.flex} ${styles['items-center']} ${styles['w-full']} ${styles['h-full']} ${styles['pb-2']}`}>
        <div className={`${styles['h-full']}`}>
          <NavBar onToggle={setMenuOpen}/>
        </div>

        <div className={`${styles.flex} ${styles['flex-col']} ${styles['items-center']} ${styles['w-full']} ${styles['h-full']} ${styles['pt-2']} ${menuOpen ? styles["padding-right-10"] : ""}`}>
          <div className={`${styles['border']} ${styles.flex} ${styles['flex-col']} ${styles["mt-5"]} ${styles['bg-green-370']} ${styles['minh-5rem']} ${styles['w-full']} ${styles['minw-370px']} ${styles['maxw-1080px']} ${styles['color-white']} ${styles.fontPixel} ${styles['radius-2-2']}`}>
            <h1 className={`${styles['text-3xl']} ${styles['font-bold']} ${styles['mt-4']} ${styles['mb-2']} ${styles['text-center']}`}>MangueBits ainda Vive</h1>
          </div>

          <div className={`${styles['border']} ${styles['bg-green-500']} ${styles['overflow-y-scroll']} ${styles['w-full']} ${styles['minw-370px']} ${styles['maxw-1080px']} ${styles['color-white']} ${styles['h-full']} ${styles['mobile-scroll']} ${styles['pt-1']} ${styles['pb-2']} ${styles['gap-2']}`}>
            <div className={`${styles.flex} ${styles['w-full']}`}>
              <span className={`${styles['color-white']} ${styles['font-bold']} ${styles['p-4']}`}>Comunidades mais Populares:</span>
            </div>

            <div className={`${styles['grid-personalizado']} ${styles['mobile-scroll']} ${styles['w-full']} ${styles['pb-2']}`}>
              {comunidades.map(comunidade => (
                <CardComunidade
                  key={comunidade.id}
                  nome={comunidade.nome}
                  descricao={comunidade.descricao}
                  categoria={comunidade.categoria}
                  popularidade={comunidade.popularidade}
                  seguindo={comunidade.seguindo}
                  avatarUrl={comunidade.avatarUrl}
                  onToggleSeguir={() => toggleSeguir(comunidade.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AderirComunidade;
