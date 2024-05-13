
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Main } from "./components/Main";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/tasks',
      element:<Main/>
    }
];

export default AppRoutes;
