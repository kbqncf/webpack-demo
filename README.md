#webpack 简单多页应用demo

###简要分析



###技术栈

webpack+gulp+es6+sass

###项目结构
- website
    - src                #代码开发目录
        - sass           #sass目录，按照页面（模块）、通用、第三方三个级别进行组织
            + page
            + common
            + lib
        + images         #图片资源
        - js             #JS脚本，按照page、components进行组织
            + page
            + components
        + html_tpl       #HTML模板
        + html           #HTML模板编译输出目录
    - dist               #webpack编译打包输出目录，无需建立目录可由webpack根据配置自动生成
        + css
        + js
        + html
    + node_modules       #所使用的nodejs模块
    + package.json         #项目配置
    + gulpfile.js          #gulp配置
    + webpack.config.babel.js    #webpack配置(es6)
    + README.md            #项目说明

###项目运行

运行之前请先安装node

安装项目依赖包
> npm install

编译项目
> webpack

启动本地测试环境
> webpack-dev-server --hot --inline

enjoy!

###参考资料




