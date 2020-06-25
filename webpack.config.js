const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),     //arquivo gerado
    filename: 'bundle.js'
},
    devServer: {
        contentBase : path.resolve(__dirname, 'public') //onde ta as aplicações transformadas
    }, 
    module: {
        rules: [ //definir regra
            {
            test: /\.js$/, //quando for arquivo js
            exclude: /node_modules/, //e n tiver na paste node_modules
                use: {
                    loader: 'babel-loader', //converter pelo node-modules
                }
        }]
    }
}