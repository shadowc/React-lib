const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    mode: process.env.APP_ENV,
    watchOptions: {
        ignored: '**/node_modules',
    },
    entry: {
        [process.env.APP_ENV === 'production' ? 'dist/react-lib.min' : 'dist/react-lib']: {
            import: path.resolve('./src/index'),
            library: {
                type: 'commonjs-static',
            }
        },
        [process.env.APP_ENV === 'production' ? 'dist/react-lib.umd' : 'dist/react-lib.umd.dev']: {
            import: path.resolve('./src/index'),
            library: {
                name: 'ReactLib',
                type: 'umd',
                export: 'default',
            }
        },
    },
    output: {
        path: path.resolve('.'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.APP_ENV),
            APP_VERSION: JSON.stringify(JSON.parse(fs.readFileSync(path.resolve('./package.json')).toString()).version),
        }),
    ],
    devtool: process.env.APP_ENV === 'production' ? false : 'eval-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
}
