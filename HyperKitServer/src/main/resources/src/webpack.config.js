const {
    AutoWebPlugin
} = require('web-webpack-plugin');

const autoPlugin = new AutoWebPlugin(
    // the directory hold all pages
    './', {
        template: (pageName) => __dirname + "/" + pageName + "/" + pageName + "Page.html",


        ignorePages: ['node_modules'],

        // whether output a pagemap.json file which contain all pages has been resolved with AutoWebPlugin in this way:
        // {"page name": "page url",}
        outputPagemap: true,
    }
);
module.exports = {
    entry: autoPlugin.entry({
        babelPolyfill: 'babel-polyfill',
        hypercommon: './hypercommon',
    }),
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2']
                }
            }
        }]
    },
    output: {
        path: __dirname + "/../static"
    },
    plugins: [
        autoPlugin,
    ],
};