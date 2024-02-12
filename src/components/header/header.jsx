import React from 'react';
import css from './header.module.css';
import logo from '../img/image_1.png';
import { Link } from 'react-router-dom/dist';

const header = () => {
  return (
    <div className={css.container}>
      <Link to="/">
        <img src={logo} alt="img not found" className={css.logo} />
      </Link>
      <a
        href="https://crm.ucreate.org.ua/"
        className={css.header__link}
        target="_blank"
        rel="noreferrer"
      >
        Посилання на сайт
      </a>
    </div>
  );
};
export default header;
