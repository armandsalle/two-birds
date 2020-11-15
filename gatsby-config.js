require("dotenv").config({
  path: `.env`,
})

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
    {
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "twobirds", // required
        defaultLang: "fr-fr", // optional, but recommended
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        previews: false, // optional, default: true
        path: "/preview", // optional, default: /preview
        pages: [
          {
            type: "projects",
            match: "/:uid",
            previewPath: "/project",
            component: require.resolve("./src/templates/project.js"),
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          "projectLogo",
          "projectThumbnail",
          "imageFull",
          "leftImage",
          "rightImage",
          "seoImage",
          "birdsImage",
          "siteImage",
          "siteLogo",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Two Birds`,
        short_name: `TwoBirds`,
        start_url: `/`,
        lang: `en`,
        theme_color_in_head: false,
        icon: `src/images/twobirds-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
