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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "500", "600", "700", "800", "900"],
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
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
        defaultLang: "en-us", // optional, but recommended
        langs: ["fr-fr", "en-us"],
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        previews: false,
        omitPrismicScript: true,
        shortenUrlLangs: true,
        pages: [
          {
            type: "home",
            match: "/:lang?/",
            langs: ["fr-fr", "en-us"],
            component: require.resolve("./src/templates/home.js"),
          },
          {
            type: "legals",
            match: "/:lang?/legals",
            langs: ["fr-fr", "en-us"],
            component: require.resolve("./src/templates/legals.js"),
          },
          {
            type: "projects",
            match: "/:lang?/:uid",
            langs: ["fr-fr", "en-us"],
            component: require.resolve("./src/templates/project.js"),
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          "projectLogo",
          "projectThumbnail",
          "imageFull",
          "imageFullSharp",
          "twitterCard",
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
