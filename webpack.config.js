const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: [0.75, 0.90],
                                speed: 3,
                            }
                        }
                    }
                ],
                dependency: { not: ['url']},
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'/src/index.html'),
            favicon: path.join(__dirname,'./src/assets/icons/favicon.png')
       }) 
   ]
}