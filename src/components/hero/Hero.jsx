import { Button } from 'components/button/Button';
import { Headline, Wrapper } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Headline>
        <Wrapper>
          <h1>Ми побудуємо твоє майбутнє</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur Tempus integer laoreet diam
            imperd
          </p>
          <Button />
        </Wrapper>
      </Headline>
    </>
  );
};
