module.exports = {
  siteMetadata: {
    title: `Two Birds`,
    description: `Two Birds`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.js`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /* {
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "camillesnr", // required
        defaultLang: "fr-fr", // optional, but recommended
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        // path: "/preview", // optional, default: /preview
        // previews: true, // optional, default: true
        pages: [
          {
            type: "Categories", // TypeName from prismic
            match: "/:uid", // pages will be generated under this pattern
            previewPath: "/categorie", // optional path for unpublished documents
            component: require.resolve("./src/templates/categorie.js"),
            extraPageFields: `_meta {
              id
            }`,
            // sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
          },
          {
            type: "Projets",
            match: "/projet/:uid",
            customPath: node => {
              return `/${node.categorie._meta.uid}/${node._meta.uid}`
            },
            extraPageFields: `categorie {
              _linkType
              ... on PRISMIC__Document{
                _meta {
                  uid
                }
              }
            }`,
            previewPath: "/projet",
            component: require.resolve("./src/templates/projet.js"),
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          "profilepic",
          "thumbnail",
          "leftImage",
          "rightImage",
          "imageFull",
          "imageLandscape",
          "imagePortrait",
          "camille",
          "siteImage",
        ],
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Two Birds`,
        short_name: `TwoBirds`,
        start_url: `/`,
        lang: `fr`,
        theme_color_in_head: false,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
