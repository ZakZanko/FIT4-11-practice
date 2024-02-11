//import Navigation from './navigation/Navigation';
import { lazy } from 'react';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom/dist';

const Form = lazy(() => import('./form/Form'));
const Navigation = lazy(() => import('./navigation/Navigation'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigation />} />
          <Route path="search-name" element={<Form />} />
          <Route path="search-url" element={<Form />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </>
  );
};
