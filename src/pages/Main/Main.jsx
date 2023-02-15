import { Header } from 'components/header/Header';
import { Hero } from 'components/hero/Hero';
import { Container, Section } from './Main.styled';

export const MainPage = () => {
  return (
    <Section>
      <Container>
        <Header />
        <Hero />
      </Container>
    </Section>
  );
};
