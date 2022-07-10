## 1.todosList案例
			1.熟练组件化编码流程，数组的常用方法
			2.不要通过非setState的方式修改数据,操作状态时，push、unshift等方法尽量不用。
			3.所有的todo列表交给App管理，因为兄弟组件间暂时不能直接“对话”
			4.yarn add nanoid，用于生成数据的唯一标识
			5.掌握reduce方法
			6.注意：<input type="checkbox" checked={done} 会有一个警告，写onChange即可

## 2.github搜索案例
			1.请务必开启5000服务器，随后配置脚手架的代理
			2.拆分静态组件,设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
			3.分析得知：Search组件负责搜索，List组件负责展示，状态要交给App
			4.List组件不仅要展示用户信息，还要展示：欢迎词、loading、错误信息
			5.在App中设计一个方法：updateAppState去更新App的状态，一个一个写太麻烦
			6.批量的给List组件传递参数：<List {...this.state}/>
			7.在List中用三目运算符进行连续判断，从而决定List组件展示什么
			8.消息订阅与发布机制
					1.先订阅，再发布（理解：有一种隔空对话的感觉）
					2.适用于任意组件间通信
					3.要在组件的componentWillUnmount中取消订阅

		
## 3.路由的基本使用
			1.安装react-router-dom库
			2.明确好界面中的导航区、展示区，准备好Home组件、About组件
			3.导航区的a标签改为Link标签
						<Link to="/xxxxx">Demo</Link>
			4.展示区写Route标签进行路径的匹配
						<Route path='/xxxx' component={Demo}/>
			5.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 4.NavLink的使用
				1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

## 5.路由组件与一般组件
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
										history:
												go: ƒ go(n)
												goBack: ƒ goBack()
												goForward: ƒ goForward()
												push: ƒ push(path, state)
												replace: ƒ replace(path, state)

										location:
												pathname: "/about"
												search: ""
												state: null

										match:
												isExact: true
												params: {}
												path: "/about"
												url: "/about"
												
## 6.解决多级路径刷新页面样式丢失的问题
				1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter

## 7.路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配
					（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 8.Redirect的使用	
				1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>

## 9.嵌套路由
				1.注册子路由时要写上父路由的path值
				2.路由的匹配是按照注册路由的顺序进行的

## 10.向路由组件传递参数
				1.params参数
						路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
						注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
						接收参数：this.props.match.params
				2.search参数
						路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
						注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
						接收参数：this.props.location.search
						备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
				3.state参数
						路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
						注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
						接收参数：this.props.location.state
						备注：刷新也可以保留住参数