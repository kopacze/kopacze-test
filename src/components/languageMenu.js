import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StyledButton = styled.button`
  position: absolute;
  right: 30px;
  padding: 14px;
  width: 45px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const LanguageMenu = props => {
  const { i18n, t } = useTranslation()

  const [language, setLanguage] = useState("en")

  function handleChange(event) {
    i18n.changeLanguage(event.target.innerText.toLowerCase())

    setLanguage(event.target.innerText.toLowerCase())
  }

  return (
    <StyledButton onClick={e => handleChange(e)} value={language}>
      {t('languageSwitch')}
    </StyledButton>
  )
}

export default LanguageMenu
