import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AbrirConta from "./pages/AbrirConta/AbrirConta";
import Base from "./pages/Base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index:' true',
        element: <Home />
      },
      {
        path: 'abrir-conta',
        children: [
          {
            path: 'passo1',
            element: <AbrirConta />
          }
        ]
      }
    ]
  }  
])

export default router
