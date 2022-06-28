//路由配置
import Async from "../async/async";
/* 引入组件 */
import Loading from "../../components/loading";
import loadable from "react-loadable";

let Home = Async(() => import("../../pages/home"));
let Com404 = Async(() => import("../../pages/404/Com404"));

/* 引入懒加载插件 */
const Login = loadable({
  loading: () => <Loading></Loading>,
  loader: () => import("../../pages/Login"),
});
const Register = loadable({
  loading: () => <Loading></Loading>,
  loader: () => import("../../pages/register"),
});

//引入二级路由
let Main = Async(() => import("../../pages/commponents/main")); //主页
let User = Async(() => import("../../pages/commponents/user")); //用户管理
let Shop = Async(() => import("../../pages/commponents/shop")); //店铺管理
let Role = Async(() => import("../../pages/commponents/role")); //角色权限
let List = Async(() => import("../../pages/commponents/list")); //商品列表
let Fenlei = Async(() => import("../../pages/commponents/fenlei")); //商品分类
let Flowers = Async(() => import("../../pages/commponents/flow")); //流水信息
let Sales = Async(() => import("../../pages/commponents/sale")); //销售数据

// 引入三级路由
let Productadd = Async(() =>
  import("../../pages/commponents/list/product/Productadd")
); //商品添加

let Routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    author: true,
    children: [
      {
        path: "/home/main",
        name: "Main",
        component: Main,
        author: true,
      },
      {
        path: "/home/user",
        name: "User",
        component: User,
        author: true,
      },
      {
        path: "/home/shop",
        name: "Shop",
        component: Shop,
        author: true,
      },
      {
        path: "/home/role",
        name: "Role",
        component: Role,
        author: true,
      },
      {
        path: "/home/product/list",
        name: "List",
        component: List,
        author: true,
      },
      {
        path: "/home/product/fenlei",
        name: "Fenlei",
        component: Fenlei,
        author: true,
      },
      {
        path: "/home/finance/flows",
        name: "Flowers",
        component: Flowers,
        author: true,
      },
      {
        path: "/home/finance/sales",
        name: "Sale",
        component: Sales,
        author: true,
      },
      /*
       * 子路由
       */
      {
        path: "/home/product/list/add",
        name: "Productadd",
        component: Productadd,
        author: true,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/error",
    name: "404",
    component: Com404,
  },
];

export default Routes;
