import React from 'react';
import css from './Navigation.module.css';
import Loupe from '../img/Group_1.png';
import { ReactComponent as Url } from '../img/URL.svg';

const navigation = () => {
  return (
    <section className={css.navigation}>
      <div className={css.loupe}>
        {/* <img src={loupe} className={css.img__loupe} alt="loupe not fond" /> */}
        <img className={css.img__loupe} src={Loupe} />
      </div>
      <div className={css.line}></div>

      <div className={css.url}>
        <Url className={css.img__url}></Url>
      </div>
    </section>
  );
};

export default navigation;
