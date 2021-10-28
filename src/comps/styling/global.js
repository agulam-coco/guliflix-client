import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}

.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  opacity: 0;
  transition: opacity 0.5s;
  visibility: hidden;
  width: 120px;
  background-color:  ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.tooltipText};
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  opacity: 1;
  visibility: visible;
}

.tooltip-right .tooltiptext-right {
  top: -5px;
  right: 105%;
}

.nav-link {
  border-bottom: 3px solid ${({ theme }) => theme.navLinkBorder};
  color: ${({ theme }) => theme.color};
}
`;
