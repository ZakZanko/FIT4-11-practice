import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/header/Header';
import Container from 'components/base/Container';

const Layout = () => {
  return (
    <>
      <Container>
        <header>
          <Header />
        </header>
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
