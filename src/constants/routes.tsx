import Users from "../features/users/Users";
import Semesters from "../features/semesters/pages/Semesters";
import Seasons from "../features/seasons/pages/Seasons";
import Tutorials from "../features/tutorials/pages/Tutorials";
import Admin from "../features/admin/pages/Admin";
import Signin from "../features/signin/pages/Signin";

export const AppRoutes = [
  {
    name: "ورود",
    path: "/signin",
    isGuarded: false,
    component: <Signin />,
    children: undefined,
  },
  // {
  //   name: "ثبت نام",
  //   path: "/signup",
  //   component: <SignUp />,
  //   children: undefined,
  // },
  // {
  //   name: "کاربر",
  //   path: "/",
  //   component: <User />,
  //   children: [
  //     {
  //       name: "ورود",
  //       path: "/tutorial",
  //       component: <SignIn />,
  //     },
  //     {
  //       name: "ورود",
  //       path: "/analysis",
  //       component: <SignIn />,
  //     },
  //   ],
  // },
  {
    name: "صفحه ادمین",
    path: "/admin",
    component: <Admin />,
    isGuarded: true,
    children: [
      {
        name: "مدیریت کاربران",
        path: "/admin/users",
        component: <Users />,
      },
      {
        name: "مدیریت ترم‌ها",
        path: "/admin/semesters",
        component: <Semesters />,
      },
      {
        name: "مدیریت فصل‌ها",
        path: "/admin/seasons",
        component: <Seasons />,
      },
      {
        name: "مدیریت درس‌ها",
        path: "/admin/tutorials",
        component: <Tutorials />,
      },
    ],
  },
];
