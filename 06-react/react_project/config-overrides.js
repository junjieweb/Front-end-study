const {override, fixBabelImports, addPostcssPlugins} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',//对哪个库进行按需引入
        libraryDirectory: 'es',//样式模块作为ES6模块处理
        style: 'css',//处理的css样式
    }),
    addPostcssPlugins([
        require("postcss-px2rem")({
            remUnit: 37.5 //按照设计师的设计稿计算出来的根字体大小
        })
    ])
);
