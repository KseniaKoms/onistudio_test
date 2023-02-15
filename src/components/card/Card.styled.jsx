import { themeColors } from 'global.styled';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 520px;
  height: 381px;
  padding: 107px 53px 64px 53px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${themeColors.lightGrey};
  box-shadow: -3px 0px 10px ${themeColors.shadow},
    3px 0px 10px ${themeColors.shadow};

  img {
    position: absolute;
    bottom: 80%;
  }
`;

export const Heading = styled.p`
  margin-bottom: 24px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  text-align: center;
`;

export const Feedback = styled.p`
  margin-bottom: 30px;

  font-weight: 300;
  font-size: 18px;
  line-height: 1.1;
  text-align: center;
`;

export const Details = styled.p`
  margin-bottom: 9px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.1;
  text-align: center;

  color: ${themeColors.placeholder};
`;
