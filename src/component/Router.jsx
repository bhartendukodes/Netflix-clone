import { createBrowserRouter } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/browse",
    element: <Browse/>,
  },
]);

export default router;