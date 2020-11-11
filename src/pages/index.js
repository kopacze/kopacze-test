
import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      {t('home.content').split('\n').map(function(item, key) {
          return (
            <p key={key}>
              {item}
            </p>
          )
        })
      }
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
    </div>
  )
}

export default IndexPage