import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 151px 160px;
    gap: 83px;
  }

  h3 {
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;

    margin-bottom: 22px;
  }

  p {
    width: 60%;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
