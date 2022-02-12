### 1.antd的基本使用：
		(1).yarn add antd
		(2).引入样式：import 'antd/dist/antd.css';
		(3).根据文档引入组件

### 2.antd按需引入样式
		(1).yarn add react-app-rewired customize-cra babel-plugin-import
		(2).修改package.json，内容如下：
			.....
			  "scripts": {
					"start": "react-app-rewired start",
					"build": "react-app-rewired build",
					"test": "react-app-rewired test",
					"eject": "react-scripts eject"
				},
		  .....
		(3).在根目录下创建：config-overrides.js，内容如下：
			const { override, fixBabelImports } = require('customize-cra');
			module.exports = override(
					fixBabelImports('import', {
						libraryName: 'antd', //对哪个库进行按需引入
						libraryDirectory: 'es', //样式模块作为ES6模块处理
						style: 'css',//处理的css样式
					}),
				);


### 3.antd自定义主题
		(1).yarn add less less-loader
		(2).修改config-overrides.js，内容如下：
				const { override, fixBabelImports,addLessLoader } = require('customize-cra');
				module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd', //对哪个库进行按需引入
							libraryDirectory: 'es', //样式模块作为ES6模块处理
							style: true,//处理原文件样式
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true, //允许js更改修改antd的less文件中的变量
								modifyVars: { '@primary-color': 'green' },
							}
						}),
					);

### 4.antd-mobile配置：
		修改config-overrides：
			const { override, fixBabelImports,addLessLoader,addPostcssPlugins } = require('customize-cra');
			module.exports = override(
					fixBabelImports('import', {
						libraryName: 'antd-mobile', //对哪个库进行按需引入
						libraryDirectory: 'es', //样式模块作为ES6模块处理
						style: true,//处理原文件样式
					}),
					addLessLoader({
						lessOptions:{
							javascriptEnabled: true, //允许js更改修改antd的less文件中的变量
							// modifyVars: { '@primary-color': 'green' }, //antd要修改的是@primary-color
							modifyVars: { 
								"@brand-primary": "green",
								"@brand-primary-tap":"rgb(1, 99, 1);"
								},
						}
					}),
					addPostcssPlugins([
						require("postcss-px2rem")({ 
							remUnit: 37.5 //按照设计师的设计稿计算出来的根字体大小
						})
					])
				);

### 5.react脚手架中的rem适配
		参考【vue_react脚手架rem适配.md】配置即可

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
