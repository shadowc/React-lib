const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['env'],
        sourceMap: false,
        plugins: ['transform-object-rest-spread']
    }
};

const babelLoaderReact = {
    loader: 'babel-loader',
    options: {
        presets: ['env', 'react'],
        sourceMap: false
    }
};

module.exports = {
    entry: {
        ReactComponentsLib: path.resolve(__dirname, 'src', 'es6', 'ReactLib.js'),
        ReactGrid: path.resolve(__dirname, 'src', 'es6', 'Grid.js'),
        ReactModal: path.resolve(__dirname, 'src', 'es6', 'Modal.js'),
        ReactTagsManager: path.resolve(__dirname, 'src', 'es6', 'TagsManager.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    babelLoader
                ],
                exclude: /node_modules/
            },
            {
                test: /.jsx$/,
                use: [
                    babelLoaderReact
                ],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin([
            './dist'
        ], {
            root: path.resolve(__dirname)
        }),
        new UglifyJsPlugin()
    ]
};
