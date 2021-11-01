import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}

.nav-link {
  border-bottom: 3px solid ${({ theme }) => theme.navLinkBorder};
  color: ${({ theme }) => theme.color};
}

.search-result-div {
  background:${({ theme }) => theme.searchBg};
}
`;
