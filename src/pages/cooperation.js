import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StyledContainer from "../components/styledContainer"
import StyledBackgroundImage from "../components/styledBackgroundImage"
import firstImage from "../assets/kopacze-5.jpeg"
import StyledSection from "../components/styledSection"
import { PRIMARY, SECONDARY } from "../common/colors"
import styled from "styled-components"

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

  li {
    width: 45%;
    margin: 15px 10px;
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 5px solid ${SECONDARY};
    box-shadow: 6px 4px ${PRIMARY};
    background-color: white;
    opacity: 0.8;
    border-radius: 15px;

    @media (max-width: 600px) {
      width: 80%;
    }
  }
`


const CooperationPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("cooperation.seoTitle")} />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h2>{t("cooperation.options")}</h2>
          <StyledUl>
            {t("cooperation.optionsList")
              .split("\n")
              .map((item, key) => {
                return <li key={key}>{item}</li>
              })}
          </StyledUl>
        </StyledContainer>
      </StyledSection>
    </>
  )
}
export default CooperationPage
