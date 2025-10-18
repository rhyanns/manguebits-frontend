import React from "react";
import styles from './styleHeader.module.css';

import iconSite from "../../assets/img/icon-site.png";
import plus from "../../assets/img/plus.png";
import message from "../../assets/img/message-square.png";
import bell from "../../assets/img/bell.png";
import search from "../../assets/img/search.png";

function Header() {
  return (
    <div className={`${styles['ft-16px']} ${styles['bg-green-700']} ${styles['text-white']} ${styles.flex} ${styles['justify-around']} ${styles['items-center']} ${styles['h-65px']} ${styles['w-full']}`}>
      <div className={`${styles.flex} ${styles['flex-1']} ${styles['p-08-0']} ${styles['items-center']} ${styles['gap-2']} ${styles['h-full']} ${styles['ml-05']}`}>
        <img className={` ${styles['h-full']}`} src={iconSite} alt="icone do site" />
        <p className={`${styles.fontPixel} ${styles['spanControl']}`} >MangueBits</p>
      </div>

      <div className={`${styles['mw-160px']} ${styles['flex-1']}  ${styles['h-40px']} ${styles.flex} ${styles['items-center']} ${styles['p-05']} ${styles['gap-03']} ${styles['radius-5']} ${styles['justify-between']}`}>
        <div className={`${styles["p-02-05"]} ${styles.flex} ${styles['items-center']} ${styles['gap-1']} ${styles['w-full']} ${styles['bg-white-500']} ${styles['h-full']} ${styles['pl-1']} ${styles['radius-5']}`}>
          <input className={`${styles['h-full']} ${styles['w-full']} `} type="text" placeholder="Pesquisar..." />
        </div>
      </div>

      <div className={`${styles['flex-1']} ${styles.flex} ${styles['items-center']} ${styles['gap-07']} ${styles['justify-center']} ${styles['m-5']}`}>
        <button className={`${styles.transparent} ${styles['p-1']} ${styles['w-25px']}`}><img src={plus} alt="" /></button>
        <button className={`${styles.transparent} ${styles['p-1']} ${styles['w-25px']}`}><img src={message} alt="" /></button>
        <button className={`${styles.transparent} ${styles['p-1']} ${styles['w-25px']}`}><img src={bell} alt="" /></button>

        <div className={`${styles['radius-1']} ${styles['bg-white-500']} ${styles['w-1']} ${styles['h-1']}`}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
