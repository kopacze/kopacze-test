import React from "react"
import { withTrans } from "../i18n/withTrans"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import HamburgerNav from "./hamburgerNav"
import { Link } from "gatsby"
import styled from "styled-components"
import {PRIMARY} from "../common/colors";

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px 50px;
  background-color: ${PRIMARY};
  color: white;
`

const StyledFooterContent = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }
`

const Layout = ({ children, t }) => {
  const Links = [
    <Link to="/" key="navLink1">
      {t("menu.home")}
    </Link>,
    <Link to="/about" key="navLink2">
      {t("menu.about")}
    </Link>,
    <Link to="/support-us" key="navLink3">
      {t("menu.supportUs")}
    </Link>,
  ]
  return (
    <div>
      <GlobalStyle />
      <HamburgerNav>{Links}</HamburgerNav>
      <Header>{Links}</Header>
      <div>
        <main>{children}</main>
      </div>
      <StyledFooter>
        <StyledFooterContent>
          © {new Date().getFullYear()}, {t("footer")}
        </StyledFooterContent>
      </StyledFooter>
    </div>
  )
}

export default withTrans(Layout)
