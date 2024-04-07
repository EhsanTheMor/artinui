import Users from "../features/users/Users";
import Semesters from "../features/semesters/Semesters";
import Seasons from "../features/seasons/pages/Seasons";
import Tutorials from "../features/tutorials/Tutorials";
import Admin from "../features/admin/pages/Admin";

export const AppRoutes = [
  // {
  //   name: "ورود",
  //   path: "/signin",
  //   component: <SignIn />,
  //   children: undefined,
  // },
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
