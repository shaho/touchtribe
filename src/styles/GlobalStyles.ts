import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 1.6;
  color: #777;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;

  margin: 0;
  padding: 1rem;
  max-width: 1200px;
  margin: 30px auto;
}

ul li {
  padding: 0.5rem 0;
  list-style: none;
}

a {
  text-decoration:none;
}

.container {
  display: flex;
  width: 100%;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
}
`;

export default GlobalStyles;
