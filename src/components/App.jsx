import Navigation from './navigation/Navigation';
import Container from './base/Container';
import Header from './header/Header';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Navigation />
      </Container>
    </>
  );
};
