// import { notification, message } from "antd";
// 配置一二级路由守卫
// 创建一个纯函数组件
import { Switch, Route, Redirect } from "react-router-dom";
//检测方法
let checkLogin = () => {
  // console.log('检测');
  return localStorage.getItem("token");
};

let RouterView = ({ Routes }) => {
  // console.log(Routes);
  // let openNotification = () => {
  //   const args = {
  //     message: "提示信息!",
  //     description: "身份信息过期,请重新登录!",
  //     duration: 0,
  //   };
  //   notification.open(args);
  // };
  return (
    <Switch>
      {Routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            render={(props) => {
              //这里存在路由信息
              //获取路径信息
              let { location } = props;
              let { pathname } = location;
              let target = route["children"] ? route.children : route; //[]  {}
              let targetRouter = null;
              if (Array.isArray(target)) {
                targetRouter = target.find((item) => item.path === pathname);
              } else {
                targetRouter = target;
              }
              //检测登录
              let isLogin = checkLogin();
              // console.log(isLogin);
              if (targetRouter && !targetRouter.author && !isLogin) {
                return (
                  <route.component
                    {...props}
                    Routes={route.children}
                  ></route.component>
                );
              }

              if (isLogin) {
                //登录
                if (pathname === "/login" || pathname === "/home") {
                  return <Redirect to="/home/main"></Redirect>;
                }
                if (targetRouter) {
                  return (
                    <route.component
                      {...props}
                      Routes={route.children}
                    ></route.component>
                  );
                } else {
                  return <Redirect to="/error"></Redirect>;
                }
              } else {
                //未登录
                if (targetRouter) {
                  alert("身份认证过期,请重新登录!");
                  // message.error("身份认证过期,请重新登录!", 5);
                  // openNotification();
                  return <Redirect to="/login"></Redirect>;
                } else {
                  return <Redirect to="/error"></Redirect>;
                }
              }
            }}
          ></Route>
        );
      })}
      <Redirect from="/" to="/login"></Redirect>
    </Switch>
  );
};

export default RouterView;
