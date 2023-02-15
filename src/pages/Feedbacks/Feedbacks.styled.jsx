import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 136px 160px 165px 160px;
  }

  h3 {
    margin-bottom: 179px;

    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 80px;
`;
