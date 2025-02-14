import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StyledContainer from "../components/styledContainer"
import StyledBackgroundImage from "../components/styledBackgroundImage"
import firstImage from "../assets/kopacze-8.webp"
import StyledSection from "../components/styledSection"
import StyledActionButton from "../components/styledActionButton"

const SupportUsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("supportUs.seoTitle")} />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>
            <StyledActionButton href="https://subscribepage.io/g6NNPw">
              {t("supportUs.title")}
            </StyledActionButton>
          </h1>
          {t("supportUs.content")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}

          <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            {t("supportUs.email")}
          </span>
        </StyledContainer>
      </StyledSection>
    </>
  )
}

export default SupportUsPage
