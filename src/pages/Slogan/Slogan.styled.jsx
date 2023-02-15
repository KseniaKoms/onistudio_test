import styled from 'styled-components';
import image from 'assets/images/bakgrounds/background.png';
import { themeColors } from 'global.styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 72px 160px;
  }

  h3 {
    margin-bottom: 19px;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.1;

    color: ${themeColors.white};
  }

  p {
    width: 80%;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    color: ${themeColors.white};
  }

  button {
    margin-top: 58px;
  }
`;

export const Section = styled.section`
  background: url(${image});
  background-size: cover;
`;
