import styled from 'styled-components';
import { themeColors } from 'global.styled';

export const FormGrid = styled.form`
  width: 740px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  [for='email'],
  [for='text'] {
    grid-column: 1 / 3;
  }

  #email,
  #text {
    width: 100%;
  }

  #phone {
    width: 407px;
  }
  #text {
    height: 224px;
  }
  input,
  textarea {
    width: 301px;
    padding: 36px 31px;

    background: ${themeColors.formBackground};
    border-radius: 5px;
    resize: none;
    outline: none;
  }
`;
