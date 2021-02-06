/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: { 
    title: 'Portfolio of something!',
    author: 'MZ!'
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FB_APIKEY,
          authDomain: process.env.FB_AUTHDOMAIN,
          databaseURL: process.env.FB_DATABASEURL,
          projectId: process.env.FB_PROJECTID,
          storageBucket: process.env.FB_STORAGEBUCKET,
          messagingSenderId: process.env.FB_MESSAGINGSENDERID,
          appId: process.env.FB_APPID
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },

  ],
}

