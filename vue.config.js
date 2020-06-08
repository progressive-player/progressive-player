const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
    chainWebpack: config =>
    {
        if (process.env.NODE_ENV === 'production')
        {
            config.plugin("CompressionPlugin").use(CompressionPlugin);
            config.plugin("BrotliPlugin").use(BrotliPlugin);
            config.resolve.alias.set("vue$", "vue/dist/vue.runtime.esm-browser.prod.js");
        }
    }
};