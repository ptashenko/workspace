module.exports = {
  filenameHashing: false,
  publicPath: '.',
  productionSourceMap: false,
  indexPath: 'index.php',
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap((args) => {
        args[0].title = 'Programul financiar revoluționar, dezvoltat de Organizația Internațională Filantropice Îngerii din Afaceri.';
        args[0].minify = false;
        args[0].minify.removeAttributeQuotes = false;
        return args;
      });
    }
  },
};