import styled from 'styled-components';
import image from 'assets/images/bakgrounds/hero.jpg';

export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Section = styled.section`
  background: url(${image});
  background-size: cover;
`;
