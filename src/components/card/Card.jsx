import {
  Container,
  Details,
  Feedback,
  Heading,
  Paragraph,
} from './Card.styled';

export const Card = ({ imgUrl }) => {
  return (
    <Container>
      <img src={imgUrl} alt="customer" width="147px" height="147px" />
      <Heading>Lorem ipsum dolor sit amet consectetur</Heading>
      <Feedback>
        Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam
        imperdiet volutpat. Mauris elit feugiat a libero vel. Duis hac odio
        pharetra sit egestas.
      </Feedback>
      <Details>More details</Details>
      <Paragraph>Lorem ipsum dolor</Paragraph>
    </Container>
  );
};
