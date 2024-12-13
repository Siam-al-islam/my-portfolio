import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import ResumeImage from './components/resume/ResumeImage.jsx';
import Skills from './components/navbar/Skills.jsx';
import Works from './components/navbar/Works.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/works",
        element: <Works />
      },
      {
        path: "/resumeImage",
        element: <ResumeImage />
      },
    ],
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
