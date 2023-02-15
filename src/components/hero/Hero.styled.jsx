import styled from 'styled-components';

export const Headline = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 214px 160px 292px 160px;
  }
  h1 {
    margin-bottom: 17px;

    font-weight: 700;
    font-size: 70px;
    line-height: 1.1;
  }
  p {
    margin-bottom: 50px;

    font-weight: 400;
    font-size: 32px;
    line-height: 1.1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 665px;
`;
