import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base";
import Home from "./pages/Home/Home";
import Redireciona from "./pages/AbrirConta/Redireciona";
import AbrirConta from "./pages/AbrirConta/AbrirConta";
import ConfirmacaoConta from "./pages/ConfirmacaoConta/ConfirmacaoConta";
import AcessarConta from "./pages/AcessarConta/AcessarConta";
import Conta from "./pages/Conta/Conta";
import Erro404 from "./pages/Erro404/Erro404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'abrir-conta',
        children: [
          {
            index: true,
            element: <Redireciona />,
          },
          {
            path: 'passo1',
            element: <AbrirConta />
          },
          {
            path: 'confirmacao',
            element: <ConfirmacaoConta />
          }
        ]
      },
      {
        path: 'acessar-conta',
        element: <AcessarConta />
      },
      {
        path: "*",
        element: <Erro404 />
      }
    ]
  },
  {
    path: '/conta/:conta',
    element: <Conta />
  }
]);

export default router;
