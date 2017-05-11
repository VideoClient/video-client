const path = require('path');
const webpack = require('webpack');

module.exports = [{
    target: "electron-renderer",
    entry: {
        index: ["./main.tsx"],
    },
    output: {
        path: path.resolve(__dirname, "../app"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                    }
                ]
            }
        ]
    }
}];