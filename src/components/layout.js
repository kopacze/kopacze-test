import React from "react"
import { withTrans } from "../i18n/withTrans"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import HamburgerNav from "./hamburgerNav"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const Layout = ({ children, t, i18n }) => {
  return (
    <>
      <GlobalStyle />
      <HamburgerNav />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, {t("home.title")}
      </footer>
    </>
  )
}

export default withTrans(Layout)
