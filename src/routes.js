import Auth from "./views/Auth";
import AdminPanel from "./views/AdminPanel";
import Basket from "./views/Basket";
import Store from "./views/Store";
import DeviceItem from "./views/DeviceItem";

export const authRoutes = [
  {
    path: "/admin",
    Component: AdminPanel,
  },
  {
    path: "/basket",
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: "/",
    Component: Store,
  },
  {
    path: "/login",
    Component: Auth,
  },
  {
    path: "/regiter",
    Component: Auth,
  },
  {
    path: "/device/:id",
    Component: DeviceItem,
  },
];
