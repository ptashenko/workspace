module.exports = {
  publicPath: ".",
  productionSourceMap: false,
  indexPath: "index.php",
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugin("html").tap((args) => {
        args[0].title = "Le pays de vos rêves";
        args[0].minify = false;
        args[0].minify.removeAttributeQuotes = false;
        return args;
      });
    }
  },
};
