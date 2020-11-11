import React from "react"
import LanguageMenu from "./languageMenu"
import styled from "styled-components"

const StyledLanguageMenu = styled(LanguageMenu)`
  position: absolute;
  right: 30px;
`

const StyledHeader = styled.header`
  background: seagreen;
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
    padding: 0 20px;

    &:hover {
      color: lightblue;
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
