module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          firefox: "51",
          safari: "602.2.14",
        },
        corejs: "3.6",
        useBuiltIns: "usage",
        shippedProposals: false,
      },
    ],
  ],
};
