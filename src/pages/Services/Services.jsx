import first from 'assets/images/services/first.jpg';
import second from 'assets/images/services/second.jpg';
import third from 'assets/images/services/third.jpg';
import fourth from 'assets/images/services/fourth.jpg';
import fifth from 'assets/images/services/fifth.jpg';
import sixth from 'assets/images/services/sixth.jpg';
import seventh from 'assets/images/services/seventh.jpg';
import eigth from 'assets/images/services/eigth.jpg';
import { Container, Section, Wrapper } from './Services.styled';
import { Button } from 'components/button/Button';

export const Services = () => {
  return (
    <Section id="services">
      <Container>
        <h3>Наші послуги</h3>
        <ul>
          <li>
            <Wrapper>
              <img src={first} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={second} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={third} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={fourth} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={fifth} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={sixth} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={seventh} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
          <li>
            <Wrapper>
              <img src={eigth} alt="service" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </Wrapper>
          </li>
        </ul>
        <Button />
      </Container>
    </Section>
  );
};
