/*
module.exports = {
  siteMetadata: {
    title: `My Blog 2022 06 28`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
*/

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "내꺼다 이말씀",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};


/*
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "내꺼다 이말씀",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
*/