import { useState } from "react";
import styles from "./styleDestaque.module.css";


function Destaques() {
  return (
    <>
        <div className={`${styles.flex} ${styles['w-full']} ${styles['justify-center']} ${styles['align-center']} ${styles['p-5']}`}>
            <div className={`${styles.flex} ${styles['flex-col']} ${styles['color-white']} ${styles.fontPixel} ${styles['w-full']} ${styles['p-4']}`}>
                
                <div className={`${styles.flex} ${styles['flex-col']} ${styles['justify-center']} ${styles['align-center']} ${styles['g-3']} ${styles['w-20']}`}>
                    <span>Destaques</span>
                
                    <div className={`${styles.flex} ${styles['b-8']} ${styles['radius-8']} ${styles['p-2']} ${styles['bg-green-400']} ${styles['w-full']} ${styles['maxw-295']}`}>
                        
                        <div className={`${styles['w-25']} ${styles['h-5']} ${styles.flex} ${styles['g-05']} ${styles['radius-8']}`}>
                            <img className={styles['radius-8']} src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Destaque 1"/>
                            <span className={`${styles['w-full']} ${styles['text-center']}`}>Destaque da semana</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>

      
    </>
  );
}

export default Destaques;