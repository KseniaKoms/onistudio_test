import telegram from 'assets/icons/social/telegram.png';
import whatsapp from 'assets/icons/social/whatsapp.png';
import insta from 'assets/icons/social/insta.png';
import phone from 'assets/icons/social/phone.png';
import email from 'assets/icons/social/email.png';
import {
  ContactsWrapper,
  Container,
  FooterWrapper,
  Item,
  SocialIconsList,
  Wrapper,
  Text,
  FooterBox,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBox id="contacts">
      <Container>
        <FooterWrapper>
          <Wrapper>
            <h2>Лого</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet
              diam imperdiet volutpat. Mauris elit feugiat
            </p>
            <SocialIconsList>
              <li>
                <img src={telegram} alt="icon" width={46} height={46} />
              </li>
              <li>
                <img src={insta} alt="icon" width={46} height={46} />
              </li>
              <li>
                <img src={whatsapp} alt="icon" width={46} height={46} />
              </li>
              <li>
                <img src={whatsapp} alt="icon" width={46} height={46} />
              </li>
            </SocialIconsList>
            <Text>Lorem ipsum dolor sit</Text>
          </Wrapper>
          <Wrapper>
            <h2>Контакти</h2>
            <ContactsWrapper>
              <Item>
                <img src={phone} alt="icon" width={31} height={31} />
                <p>Lorem ipsum dolor sit</p>
              </Item>
              <Item>
                <img src={phone} alt="icon" width={31} height={31} />
                <p>Lorem ipsum dolor sit</p>
              </Item>
              <Item>
                <img src={email} alt="icon" width={31} height={31} />
                <p>Lorem ipsum dolor sit</p>
              </Item>
              <Item>
                <img src={email} alt="icon" width={31} height={31} />
                <p>Lorem ipsum dolor sit</p>
              </Item>
            </ContactsWrapper>
          </Wrapper>
        </FooterWrapper>
      </Container>
    </FooterBox>
  );
};
