import Users from "../features/users/Users";
import Semesters from "../features/semesters/Semesters";
import Seasons from "../features/seasons/Seasons";
import Tutorials from "../features/tutorials/Tutorials";

export const AppRoutes = [
  {
    name: "مدیریت کاربران",
    path: "/users",
    component: Users,
  },
  {
    name: "مدیریت ترم‌ها",
    path: "/semesters",
    component: Semesters,
  },
  {
    name: "مدیریت فصل‌ها",
    path: "/seasons",
    component: Seasons,
  },
  {
    name: "مدیریت درس‌ها",
    path: "/tutorials",
    component: Tutorials,
  },
];
