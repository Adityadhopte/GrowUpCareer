import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from "./components/Auth/signup";
import { Browse } from "./components/Browse";
import { Jobs } from "./components/Jobs";
import { Profile } from "./components/Profile";
import { JobDescription } from "./components/JobDescription";

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Home/>
  },
  
])

function App() {

  return (
    <>
    <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
