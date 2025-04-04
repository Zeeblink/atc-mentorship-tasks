import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FAQComponent from './components/FAQ.tsx'
import RandomPostCard from './components/RandomPostCard.tsx'
import ExtensionsPage from './components/ExtensionsPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/faq', element: <FAQComponent/>},
  {path: '/postcard', element: <RandomPostCard/>},
  {path: '/extensions', element: <ExtensionsPage/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
