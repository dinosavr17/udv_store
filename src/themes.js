import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    link: "#222222",
    sidebar: "#fff",
    // slider: "#F5E6CB"
};

export const darkTheme = {
    body: "#0e0d0d",
    fontColor: "#fff",
    link: '#fff',
    sidebar: "#000",
    // slider: '#222222'
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
    a {
      color: ${(props => props.theme.link)};
    }
    .nav-menu {
      background-color: ${(props) => props.theme.body };
    }
    // .containerSlide {
    //   background-color: ${(props) => props.theme.slider};
    // }
`;