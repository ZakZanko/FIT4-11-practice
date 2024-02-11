import React from 'react';
import css from './Header.module.css';
import logo from '../img/image_1.png';

const header = () => {
  return (
    <div className={css.container}>
      <img src={logo} alt="image not found" className={css.logo} />
      <a
        href="https://crm.ucreate.org.ua/"
        className={css.header__link}
        target="_blank"
      >
        Посилання на сайт
      </a>
    </div>
  );
};
export default header;
