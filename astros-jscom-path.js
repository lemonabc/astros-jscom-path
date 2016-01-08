'use strict';

// 简化JS组件引用路径
// 原来的书写路径是
// require('dialog') -- >> jslib/dialog/dialog.js
// 增加支持直接引用，即
// require('dialog') -- >> jslib/dialog.js

var nodeUrl = require('url');
var nodePath = require('path');
var nodeFs = require('fs');

module.exports = new astro.Middleware({
    fileType    : 'js',
    modType     : 'jsCom'
}, function(asset, next) {

    if(!asset.data){
        var fp = nodePath.join( asset.prjCfg.jsCom, 
                   asset.name+'.js');

        if(nodeFs.existsSync(fp)){
            try{
                asset.data = nodeFs.readFileSync(fp, 'utf8');
                asset.path = fp;
            }catch(e){
                console.error('error in middleware astros-jscom-path');
                console.error('asset info:', asset.info);
                console.error(e.stack);
            }
        }
        next(asset);
        return;
    }
    next(asset);
});

// module.exports = aa;
