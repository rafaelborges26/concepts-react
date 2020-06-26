module.exports = {
    presets: [ //transcrever as funcoes p browser entender
        '@babel/preset-env', 
        '@babel/preset-react'
    ],
    plugin: [
        '@babel/plugin-transform-runtime'
    ]
}