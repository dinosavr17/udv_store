import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    link: "#222222",
    sidebar: "#fff"
};

export const darkTheme = {
    body: "#0e0d0d",
    fontColor: "#fff",
    link: '#fff',
    sidebar: "#000"
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
`;