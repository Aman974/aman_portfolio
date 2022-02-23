import styled from "styled-components";

export const Scroll = styled.div`
.scroll-top {
  
    position: fixed;
    bottom: 2em;
    right: 1em;
    fontSize: 10em;
    background-color: transparent;
  }
  
  @media (max-width: 900px) {
    .scroll-top {
      display: none;
      width: 250px;
    }
  }
  `
