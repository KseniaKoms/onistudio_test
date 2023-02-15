import styled from 'styled-components';
import image from 'assets/images/bakgrounds/offers.png';
import { themeColors } from 'global.styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 103px 160px 115px 160px;
  }

  h3 {
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;

    color: ${themeColors.yellow};
  }

  ul {
    padding: 90px 0;
    column-gap: 20px;
    row-gap: 54px;

    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 265px;
    height: auto;
  }

  img {
    @media screen and (min-width: 1440px) {
      width: 265px;
      height: 233px;
    }
  }

  p {
    width: 95%;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;
    text-align: center;

    color: ${themeColors.white};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

export const Section = styled.section`
  background: url(${image});
  background-size: cover;
`;
