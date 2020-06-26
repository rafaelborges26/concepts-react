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
            },
            {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use:[
                        {loader: 'style-loader'}, //interpreta o css dentro do html
                        {loader: 'css-loader'}, //entende css de importações e interpreta o css
                     ]
                 
            },
            {
                test: /.*\.(gif|png|jpg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                }   
            }
    ]
    }
}