import React from 'react';
import css from './Container.module.css';

const container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default container;
