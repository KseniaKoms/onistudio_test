import { Button } from 'components/button/Button';
import { Form } from 'components/contact-form/Form';
import { Container, Section, TextWrapper } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Section id="form">
      <Container>
        <TextWrapper>
          <h3>Контактна форма</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam
            imperdiet volutpat. Mauris elit feugiat a libero vel. Duis hac odio
            pharetra sit egestas. Adipiscing imperdiet sagittis et pret
          </p>
        </TextWrapper>
        <Form />
        <Button />
      </Container>
    </Section>
  );
};
