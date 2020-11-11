import React from "react"
import { withTrans } from "../i18n/withTrans"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import HamburgerNav from "./hamburgerNav"
import { Link } from "gatsby"
import styled from "styled-components";

const StyledFooter = styled.footer`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 20px 50px;
    background-color: seagreen;
    color: white;
    `;


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
      <Link to="/" key="navLink1">{t("menu.home")}</Link>,
      <Link to="/about" key="navLink2">{t("menu.about")}</Link>,
      <Link to="/contact" key="navLink3">{t("menu.contact")}</Link>
   ];
  return (
    <div>
      <GlobalStyle />
      <HamburgerNav>{Links}</HamburgerNav>
      <Header>{Links}</Header>
      <div>
        <main>{children}</main>
      </div>
      <StyledFooter>
        © {new Date().getFullYear()}, {t("home.title")}
      </StyledFooter>
    </div>
  )
}

export default withTrans(Layout)
