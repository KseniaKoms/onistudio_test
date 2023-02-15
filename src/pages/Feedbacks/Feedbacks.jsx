import { Card } from 'components/card/Card';
import avatarFirst from 'assets/images/avatars/avatar_1.png';
import avatarSecond from 'assets/images/avatars/avatar_2.png';
import { Container, CardWrapper } from './Feedbacks.styled';

export const Feedbacks = () => {
  return (
    <Container id="feedback">
      <h3>Відгуки</h3>
      <CardWrapper>
        <Card imgUrl={avatarFirst} />
        <Card imgUrl={avatarSecond} />
      </CardWrapper>
    </Container>
  );
};
