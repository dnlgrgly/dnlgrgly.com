module.exports = {
  siteMetadata: {
    title: "dnlgrgly",
  },
  pathPrefix: "/dnlgrgly.com",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
  ],
};
