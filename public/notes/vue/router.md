


### 1.$route.params.query
**适合多个参数**
- 地址
```
/orders/?id=284306976&username=winfyho
```
* router路由配置
```
    { path:"/orders", component:Orders}
    使用query方式时，无需配置路由。得到的数据在query对象中显示
    { id:284306976, username:"winfyho" }
```
### 2.$route.params.params
**适合少量参数**
- 地址栏
```
/user/winfyho/284306976
```
- router路由配置
```
{ path:"/user/:username/:id", component:User}
```

### 3. redirect重定向
- 浏览器地址栏为空时，自动添加/home
```
{path:"/", redirect:'/home'}
```

### 4.路由嵌套
1. 在父路由中添加
```
    <router-view 父路由>
        <router-link to="/user/login">登录</router-link>
        <router-link to="/user/form">表单</router-link>
        <router-view 子路由></router-view>
    </router-view>
```

2. 在父路由的router中加入children的path配置
    子路由的path不需要加 /，否则会匹配到根路由
```
    {
        path: "/user", component: User,
        children: [
            {path:"login",component:Login},
            {path:"form",component:Form}
        ],
    }
```

### history模式
``` js
function changeRoute(route){
    console.log(route.dataset);
    let path = route.dataset.path
    let name = route.dataset.name
    let state = {
        name,
        path,
        component:{}
    }
    window.history.pushState(state,"首页",path)
    changeView({
        name
    })
}

function changeView(view){
    const _routerView = document.getElementById('router-view')
    _routerView.innerText = view.name
}

window.addEventListener('popstate',(e) => {
    console.log(e.state);
    changeView(e.state)
    
})
```

### hash模式
``` js
import {routes} from "./router.js"
window.onhashchange = function(e){
    // console.log(location.hash,e);
    let path = location.hash.replace('#','/')
    let route = null
    routes.forEach(rt => {
        if(rt.path === path){
            route = rt
        }
    })
    changeRouteByHash(route)
}

function changeRouteByHash(route){
    console.log(route);
    const _routerView = document.getElementById('router-view')
    _routerView.innerText = route.name
}
```