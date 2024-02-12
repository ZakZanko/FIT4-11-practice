import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/header/Header';
import Container from 'components/base/Container';
import css from 'components/layout/Leyout.module.css';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
