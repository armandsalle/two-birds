require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `twobirds.`,
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
        // path: "/preview", // optional, default: /preview
        omitPrismicScript: true,
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
          "birdsImageHover",
          "birdsImageLookingAt",
          "siteImage",
          "siteLogo",
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Two Birds`,
        short_name: `twobirds.`,
        start_url: `/`,
        lang: `en`,
        theme_color_in_head: false,
        icon: `src/images/twobirds-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
}
