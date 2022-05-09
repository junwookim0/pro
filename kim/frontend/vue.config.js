const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
    'vuetify'
    ]
})



const path = require('path')

module.exports = {
    outputDir : path.resolve(__dirname, '../backend/public'),

    devServer: {
        proxyTable : {
            "/api" : {
                target : 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite : {
                    "^/api" : "",
                }
            }
        },
    },
};
