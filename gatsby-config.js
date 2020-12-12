const path = require('path')

module.exports = {
  pathPrefix: '/kopacze-diggers',
  siteMetadata: {
    title: `Kopacze - Diggers`,
    description: `Website of Kopacze-Diggers collective`,
    author: `@jakub-wisniowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        i18n: path.join(__dirname, 'src/i18n'),
        images: path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`
  ],
}