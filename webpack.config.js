module.exports = {
    context: __dirname,
    entry: "./index",
    output: {
        library: 'react-infinity',
        libraryTarget: 'umd',
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    externals: [
        {
            'react/addons': 'var React'
        }
    ]
};
