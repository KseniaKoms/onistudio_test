import styled from 'styled-components';
import { themeColors } from 'global.styled';

export const Btn = styled.button`
  width: 265px;
  padding: 28px 72px;

  background-color: ${themeColors.yellow};
  border-radius: 5px;
  border: none;

  font-weight: 700;
  font-size: 30px;
  line-height: 1.1;

  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${themeColors.yellowTransparent};
    color: ${themeColors.placeholder};
  }
`;
