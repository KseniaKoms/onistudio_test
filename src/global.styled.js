import { createGlobalStyle } from 'styled-components';

export const themeColors = {
  white: '#FFFFFF',
  yellow: '#FFCF00',
  yellowTransparent: '#rgba(255, 207, 0, 0.3)',
  placeholder: '#rgba(0, 0, 0, 0.5)',
  formBackground: '#rgba(255, 255, 255, 0.7)',
  footerBackground: '#0E0803',
  headerBackground: '#rgba(255, 255, 255, 0.5)',
};

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    
}
body {

}
	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}
	ul,
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	li {
		list-style: none;
	}
	input {
		outline: none;
	}
	a {
		text-decoration: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
    img {
        margin: 0;
        display: block;
    }
`;

export default GlobalStyle;
