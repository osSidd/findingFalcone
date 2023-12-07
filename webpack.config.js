const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    optimization:{
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/](!lodash)/, 
                  // Here I don't want lodash to be included, you can remove                 (!lodash) to inclue it
                  name(module) {
                  
        // get the name. E.g. node_modules/packageName/not/this/part.js
        // or node_modules/packageName
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
        // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`;
                },
              },
        },
    },
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                options:{presets: ["@babel/env", "@babel/preset-react"]}
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {extensions: ["*", ".jsx", ".js", ".tsx", ".ts"]},
    output: {
        chunkFilename: 'scripts/[name].[fullhash:8].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'scripts/[name].[fullhash:8].bundle.js',
        clean: true,
    },
    devServer:{
        static: {
            directory: path.join(__dirname,  'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback:true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        template: './public/index.html',
    }), new ESLintPlugin()]
}