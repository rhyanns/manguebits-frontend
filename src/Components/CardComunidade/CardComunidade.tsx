import { useState } from "react";
import styles from "./styleCardComunidade.module.css";

interface CardComunidadeProps {
  nome: string;
  descricao: string;
  categoria: string;
  popularidade: number;
  seguindo: boolean;
  avatarUrl: string;
  onToggleSeguir: () => void;
}

function CardComunidade({ nome, descricao, categoria, popularidade, seguindo, avatarUrl, onToggleSeguir }: CardComunidadeProps) {
  return (
    <div className={`${styles['shadow-lg']} ${styles['bg-green-400']} ${styles.flex} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']} ${styles['w-20']} ${styles['h-6']} ${styles['p-05']} ${styles['radius-8']} ${styles.fontPixel}`}>
      
        <div className={`${styles.flex} ${styles['align-center']} ${styles['w-full']} ${styles['gap-1']} ${styles['h-90']}`}>
            <div className={styles.flex}>
                <span className={styles['fz-1-7']}>{popularidade}</span>
            </div>

            <div className={`${styles.flex} ${styles['h-full']} ${styles['align-center']} ${styles['justify-center']} ${styles['gap-07']}`}>
                
                <img className={`${styles['w-2-4']} ${styles['h-2-4']} ${styles['radius-full']}`} src={avatarUrl} alt={`Avatar de ${nome}`}/>
                

                <div className={`${styles.flex} ${styles['flex-col']} `}>
                    <span className={`${styles['font-bold']} ${styles['h-10']} ${styles['hidden']}`}>{nome}</span>
                    <span className={`${styles['color-gray-500']} ${styles['h-90']} ${styles['descricao']}`}>{descricao}</span>
                </div>
            </div>
        </div>

        <div className={`${styles.flex} ${styles['align-center']} ${styles['w-full']} ${styles['justify-right']} `}>
            <button className={`${styles["btn"]} ${styles['font-bold']} ${styles['radius-5']} ${styles['h-full']} ${styles["bg-green-500"]} ${styles['color-gray-500']}`}onClick={onToggleSeguir}>
                {seguindo ? "Seguindo" : "Seguir"}
            </button>
        </div>
    </div>
  );
}

export default CardComunidade;
