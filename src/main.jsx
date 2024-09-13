import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueriedRecipe} from './components/QueriedRecipe'
import { RecipeInfo } from './components/RecipeInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './service/redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/query',
    element: <QueriedRecipe />
  },
  {
    path: '/recipe',
    element: <RecipeInfo /> 
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
