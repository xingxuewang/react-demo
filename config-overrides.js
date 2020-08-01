 const { override,addLessLoader,fixBabelImports,addDecoratorsLegacy} = require('customize-cra');
 const modifyVars = require('./src/theme')
 module.exports = override(
      fixBabelImports('import', {
      libraryName: 'antd',
          libraryDirectory: 'es',
          style:true,
      }),
      addDecoratorsLegacy(),
      addLessLoader({
         javascriptEnabled: true,
         modifyVars
       }),
 );