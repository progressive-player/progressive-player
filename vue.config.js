module.exports = {
    chainWebpack: config =>
    {
        if (process.env.NODE_ENV === 'production')
        {
            config.resolve.alias.set("vue$", "vue/dist/vue.runtime.esm-browser.prod.js");
        }
    }
};