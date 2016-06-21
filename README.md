#webpack 简单多页应用demo

### 前言

做前端的这几年来，web自动化构建工具用得也不少，grunt,gulp,fis,browserify这些。
webpack是最近这一段时间才上手的。写这个demo，一是为了练手，二是为了解决自己的一个疑惑。
在接触webpack的这段时间，觉得webpack真是个好东西，把一切都当做资源来加载的idea很好的解决了各种资源的依赖加载和打包问题。

但是，但是，但是！all in js的解决方案就目前看来还是适合单页应用，对于多页面的站点似乎是无力的，也许gulp会比它表现更好。但真的就没有解决方案了吗？这么好的构建工具，难道就只能偏居一隅，在移动端大放异彩？
世上无难事只怕有心人。
我们来看看，多页面站点与单页面站点有哪些差异是我们需要考虑的。

>1.js不需要全部打包到一起。

多页面站点需求多，模块多，对应的js模块也就更多。不同于单页应用，多页站点更倾向于把单独的业务逻辑代码剥离，而不是合并。

>2.css应该独立出来，而不是css in js

webpack很出色的一个点就是css in js，把css也当做资源来加载，这个idea在单页应用上是很好的，既解决了资源的依赖，又减少了http的请求。
但是，多页面站点不一样。webpack的css in js方案是把css当做资源然后用js引入到html中，这会导致这样一个问题：页面html已经加载，但是css没加载(必须等到js加载解析后才会加载)，这时候页面的元素都是乱的，非常影响用户体验。
其次还有这样的的问题：css in js后，css样式无法缓存，这在多页面站点是致命的。

说了这么多，问题怎么解决？
其实很多时候，我自己也比较困惑，网络上很多教程很多demo都没涉及这一块的处理。
但，作为程序猿，发挥主观能动性，去思考去实践，是非常必要的。所以也就有了这一个demo。

我所困惑的，也许您也有。希望我的抛砖引玉，会帮到您。

以上。

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
>npm install

编译项目
> webpack

启动本地测试环境
> webpack-dev-server --hot --inline

enjoy!

###知识点&webpack插件

<hr>
####extract-text-webpack-plugin

extract-text-webpack-plugin插件,有了它就可以将你的样式提取到单独的css文件里.
使用这个插件需要在loader和plugins部分做个配置。

    var ExtractTextPlugin = require("extract-text-webpack-plugin");
		module.exports = {
		    module: {
		        loaders: [
		            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		        ]
		    },
		    plugins: [
		        new ExtractTextPlugin("styles.css")
		    ]
    }
    
详细API请参考下面地址：

[extract-text-webpack-plugin](http://npm.taobao.org/package/extract-text-webpack-plugin "extract-text-webpack-plugin")
<hr>

####html-webpack-plugin

html-webpack-plugin插件，webpack中生成HTML的插件.
可同通过配置，进行定制化处理，例如：

* 配置html模板，选择处理的模板引擎
* js insert在body的位置
* html的名称
* 引入的js文件
* hash处理资源缓存

比较典型的配置如下：

		module: {
		  loaders: [
		    { test: /\.hbs$/, loader: "handlebars" }
		  ]
		},
		plugins: [
		  new HtmlWebpackPlugin({
		    title: 'Custom template using Handlebars',
		    template: 'my-index.hbs'
		  })
		]

详细API请参考下面地址：

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin "html-webpack-plugin")
<hr>

####CommonsChunkPlugin

webpack内置插件，用于自动抽取通用模块并合并

在plugins项进行配置

	new CommonsChunkPlugin({
	            name: 'vendors' // 将公共模块提取，生成名为`vendors`的chunk
	        })
	        
详细API请参考下面地址：

[commonschunkplugin](http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin)
<hr>

####UglifyJsPlugin

webpack内置插件，用于压缩代码

在plugins项进行配置

		new UglifyJsPlugin({ //压缩代码
		            compress: {
		                warnings: false,
		                drop_debugger: true,
		                drop_console: true
		            },
		            except: ['$super', '$', 'exports', 'require', 'define', 'module'] //排除关键字
		        })

详细API请参考下面地址：

[UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)

###参考资料

[webpack官网](http://webpack.github.io/)

[Webpack 入门指迷](https://segmentfault.com/a/1190000002551952)

[WebPack：更优秀的模块依赖管理工具，及require.js的缺陷](http://ourjs.com/detail/54963e2a8a34fa3204000013)

[Webpack-dev-server结合后端服务器的热替换配置](http://www.jianshu.com/p/8adf4c2bfa51)

[前端构建工具webpack有什么缺陷？](https://www.zhihu.com/question/34460535)

###目录

[TOC]