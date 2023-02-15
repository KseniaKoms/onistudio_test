import styled from 'styled-components';
import { themeColors } from 'global.styled';

export const Heading = styled.header`
  display: flex;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 22px;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 160px;
    padding-right: 160px;
  }
  h2 {
    font-weight: 400;
    font-size: 42px;
    line-height: 1.1;
  }
  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1;

    color: inherit;
  }

  [href='#form'] {
    font-weight: 700;
  }

  ul {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  button {
    width: 170px;
    padding: 16px 45px;

    background-color: ${themeColors.yellow};
    border-radius: 5px;
    border: none;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.1;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: ${themeColors.yellowTransparent};
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 31px;

  margin-left: auto;
`;

export const HeaderWrapper = styled.div`
  padding-top: 22px;
  padding-bottom: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  background-color: ${themeColors.headerBackground};
`;
