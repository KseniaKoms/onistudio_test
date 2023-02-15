import styled from 'styled-components';
import image from 'assets/images/description/desc.jpeg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 112px 160px 112px 160px;
  }
`;

export const ImgWrapper = styled.div`
  width: 455px;
  height: 603px;

  background: url(${image});
  background-size: contain;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 570px;
  gap: 40px;

  h3 {
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;
  }
`;
