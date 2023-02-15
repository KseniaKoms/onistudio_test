import styled from 'styled-components';
import image from 'assets/images/bakgrounds/contacts.png';
import { themeColors } from 'global.styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 133px 160px 126px 160px;
    gap: 60px;
  }

  h3 {
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;

    color: ${themeColors.white};
  }

  p {
    width: 70%;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;
    text-align: center;

    color: ${themeColors.white};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;

export const Section = styled.section`
  background: url(${image});
  background-size: cover;
`;
