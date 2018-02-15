const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssModulesLoader = [
    {
        loader: 'typings-for-css-modules-loader',
        options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            namedExport: true,
            camelCase: true
        }
    }
];


module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader',use:cssModulesLoader})
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin({filename:'bundle.css', allChunks:true})
    ]
};