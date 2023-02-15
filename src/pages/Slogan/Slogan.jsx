import { Button } from 'components/button/Button';
import { Container, Section } from './Slogan.styled';

export const Slogan = () => {
  return (
    <Section>
      <Container>
        <h3>Цікавий факт про компанію/ заклик</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam
          imperdiet volutpat. Mauris elit feugiat a libero vel. Duis hac odio
          pharetra sit egestas. Adipiscing imperdiet sagittis et pret
        </p>
        <Button />
      </Container>
    </Section>
  );
};
