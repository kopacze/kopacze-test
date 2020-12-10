import React from "react"
import LanguageMenu from "./languageMenu"
import styled from "styled-components"
import {PRIMARY, SECONDARY} from "../common/colors";


const StyledLanguageMenu = styled(LanguageMenu)`
  position: absolute;
  right: 30px;
`

const StyledHeader = styled.header`
  background: ${PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const StyledLinksWrapper = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.03rem;
    font-size: 1.5rem;
    margin: 0 20px;
    position: relative;

    &:hover {
      color: ${SECONDARY};
    }
  }

  &:not(:hover) {
    a[aria-current]::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: ${SECONDARY};
    }
  }

  &:hover {
    a:hover::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: ${SECONDARY};
    }
  }

  @media all and (max-width: 900px) {
    a {
      display: none;
    }
  }
`

const Header = ({ children }) => (
  <StyledHeader>
    <StyledLinksWrapper>{children}</StyledLinksWrapper>
    <StyledLanguageMenu></StyledLanguageMenu>
  </StyledHeader>
)

export default Header
