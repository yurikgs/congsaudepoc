import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,
         RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Success from './pages/Success/Success';
import TerritoriosList from './pages/TerritoriosList/TerritoriosList';
import TerritoriosList2 from './pages/TerritoriosList2/TerritoriosList2';
import Territorio from './pages/Territorio/Territorio';
import Atividades from './pages/Atividades/Atividades';
import AtividadeDetalhes from './pages/AtividadeDetalhes/AtividadeDetalhes';
import AtividadeNova from './pages/AtividadeNova/AtividadeNova';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/territorios/list",
    element: <TerritoriosList />,
  },
  {
    path: "/territorios/list2",
    element: <TerritoriosList2 />,
  },
  {
    path: "/territorio/:id",
    element: <Territorio/>,
  },
  {
    path: "/atividades/territorio/:id",
    element: <Atividades/>
  },
  {
    path: "/atividades/nova",
    element: <AtividadeNova/>
  },
  {
    path: "/detalhes/atividade/:id",
    element: <AtividadeDetalhes/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
