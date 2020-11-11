
import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()

  return(
    <div>
      <SEO title="About page" />
      <h1>{t('about.title')}</h1>
      <p>{t('about.content')}</p>
    </div>
  )
}
export default AboutPage