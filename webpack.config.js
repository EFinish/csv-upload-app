module.exports = {
    entry: "./webpackapp.js",
    output: {
        path: __dirname+'/public/js/dist/',
        filename: "bundle.js"
    },
    watch: true
};