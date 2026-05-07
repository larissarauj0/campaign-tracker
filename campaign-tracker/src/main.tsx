import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./routes/home.tsx";
import Contas from "./routes/Contas.tsx";
import Transacoes from "./routes/Transacoes.tsx";
import Investimentos from "./routes/Investimentos.tsx";
import Configuracoes from "./routes/Configuracoes.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "transacoes",
        element: <Transacoes />,
      },
      {
        path: "contas",
        element: <Contas />,
      },
      {
        path: "investimentos",
        element: <Investimentos />,
      },
      {
        path: "configuracoes",
        element: <Configuracoes />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);