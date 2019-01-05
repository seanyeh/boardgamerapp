module.exports = {
    devtool: "source-map",
    mode: 'development',
    entry: [
        "./src/app.ts",
        "./src/style.scss"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                include: __dirname + "/src/",
                test: /\.scss$/,
                use: [ 'file-loader?name=[name].css', 'extract-loader', 'css-loader', 'sass-loader' ]
            },
            {
                include: __dirname + "/src/",
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                include: __dirname + "/assets/",
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                include: __dirname + "/src/",
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            },
            {
                test: /\.ts$/,
                include: __dirname + "/src/",
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                include: __dirname + "/assets/",
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },

    resolve: {
        extensions: [ ".ts", ".js", ".json"]
    },

    devServer: {
        contentBase: "./"
    }
};
