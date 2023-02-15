import image from 'assets/images/projects/first.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Container, TextWrapper } from './Projects.styled';

export const Projects = () => {
  return (
    <Container id="works">
      <TextWrapper>
        <h3>Наші проєкти</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam
          imperdiet volutpat.
        </p>
      </TextWrapper>
      <Carousel thumbWidth="200px">
        <div>
          <img src={image} alt="project" />
        </div>
        <div>
          <img src={image} alt="project" />
        </div>
        <div>
          <img src={image} alt="project" />
        </div>
        <div>
          <img src={image} alt="project" />
        </div>
        <div>
          <img src={image} alt="project" />
        </div>
      </Carousel>
    </Container>
  );
};
