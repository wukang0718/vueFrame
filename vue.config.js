module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'development',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/index.scss";`
            }
        }
    },
    devServer: {
        proxy: {
            "/interface": {
                target: "http://127.0.0.1:3000/interface",
                pathRewrite: {"^/interface": ""}
            }
        }
    }
};
