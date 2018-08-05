const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // web pack maing file
    entry: "./webpackapp.js",
    //where to output the bundled file to
    output: {
        path: __dirname + '/public/js/dist/',
        filename: "bundle.js"
    },
    watch: true,

    module: {
        rules: [
            // allow .vue files
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // allow <script> in .vue files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // allow css
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}; 