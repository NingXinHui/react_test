const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
    //针对antd的样式实现按需打包
    fixBabelImports('import', {
        libraryName: 'antd',//代表监控任意组件使用import xxx from antd
        libraryDirectory: 'es',//es文件目录
        style: true //自动打包引入的组件样式
    }),
    addLessLoader({
        modifyVars: { '@primary-color': '#1ca47b' },
        javascriptEnabled: true
    })
)