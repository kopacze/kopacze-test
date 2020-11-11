import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StyledContainer from "../components/styledContainer"
import StyledBackgroundImage from "../components/styledBackgroundImage"
import firstImage from "../assets/kopacze-5.jpeg"
import secondImage from "../assets/kopacze-6.jpeg"
import StyledSection from "../components/styledSection"

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="About page" />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>{t("about.title")}</h1>
          {t("about.content")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledBackgroundImage background={secondImage}></StyledBackgroundImage>
        <StyledContainer style={{ height: "100vh" }}>
          <h1>{t("about.space")}</h1>
          {t("about.aboutSpace")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}
        </StyledContainer>
      </StyledSection>
    </>
  )
}
export default AboutPage
