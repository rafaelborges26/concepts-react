module.exports = {
    presets: [ //transcrever as funcoes p browser entender
        '@babel/preset-env', 
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}