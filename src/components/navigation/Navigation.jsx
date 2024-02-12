import React from 'react';
import css from './Navigation.module.css';
import Loupe from '../img/Group_1.png';
import { ReactComponent as Url } from '../img/URL.svg';
import { Link } from 'react-router-dom/dist';

const Navigation = () => {
  return (
    <section className={css.navigation}>
      <Link to="/search-name">
        <div className={css.loupe}>
          <img className={css.img__loupe} src={Loupe} alt="Loupe not found" />
        </div>
      </Link>
      <div className={css.line}></div>
      <Link to="/search-url">
        <div className={css.url}>
          <Url className={css.img__url} />
        </div>
      </Link>
    </section>
  );
};

export default Navigation;
