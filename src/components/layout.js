import React from "react"
import { withTrans } from "../i18n/withTrans"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import styled from "styled-components"
import { PRIMARY } from "../common/colors"


const StyledChildrenWrapper = styled.div`
  margin-bottom: 105px;
  @media (max-width: 700px) {
      margin-bottom: 130px;
    }
`
const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 105px;
  bottom: 0;
  left: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${PRIMARY};
  color: black;
  @media (max-width: 700px) {
      height: 130px;
    }
`

const StyledFooterContent = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 700px) {
      flex-direction: column;
    }
`

const FooterEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }

    html {
      scroll-behavior: smooth;
    }


  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    @media (max-width: 700px) {
      white-space: pre-line;
    }

    @media (max-width: 700px) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    padding: 20px 0;
    text-align: center;
    font-size: 1.3rem;
  }

  li {
    font-size: 1.3rem;
  }

  div {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p, li {
      font-size: 0.8rem;
    }

    div {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    p, li {
      font-size: 0.8rem;
    }

    div {
      font-size: 0.8rem;
    }
  }
`

const Layout = ({ children, t }) => {
  const Links = [
    <Link to="/" key="navLink1">
      {t("menu.home")}
    </Link>,
    <Link to="/cooperation" key="navLink2">
      {t("menu.cooperation")}
    </Link>,
    <Link to="/support-us" key="navLink3">
      {t("menu.supportUs")}
    </Link>,
    <Link to="/gallery" key="navLink4">
      {t("menu.gallery")}
    </Link>,
  ]
  return (
    <div>
      <GlobalStyle />
      <Header>{Links}</Header>
      <StyledChildrenWrapper>
        <main>{children}</main>
      </StyledChildrenWrapper>
      <StyledFooter>
        <StyledFooterContent>
          <div>
            KRS: 0001024807<br></br>
            NIP: 9512564070<br></br>
            REGON: 52475973600000<br></br>
          </div>
          <FooterEmailWrapper>
            <div>email: kopacze@protonmail.com<br></br></div>
            <div>© {new Date().getFullYear()}, {t("footer")}</div>
          </FooterEmailWrapper>
        </StyledFooterContent>
      </StyledFooter>
    </div>
  )
}

export default withTrans(Layout)
