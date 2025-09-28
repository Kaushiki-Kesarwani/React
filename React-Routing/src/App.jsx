
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,} from "react-router"; 

import Homepage from './Components/Homepage';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Courses from './Components/Courses';
import Mock from './Components/Mock';
import Reports from './Components/Reports';


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar/>
      <Homepage />
    </div>
     
  },
  {
    path: "/about",
    element: <div>
    <Navbar/>
    <About />
  </div>
,


  children:[
{
  path:'courses',
  element:<Courses/>
},

{
  path:'mock-test',
  element:<Mock/>
},

{
  path:'reports',
  element:<Reports/>
}


  ]
  },
  {
    path: "/dashboard",
    element:  <div>
    <Navbar/>
    <Dashboard />
  </div>
  },

  {
    path:"/student/:id",
    element: <div>
    <Navbar/>
    <ParamComp/>
  </div>

  }
]);

function App() {
  return (
    <>
      <h1>React Routing</h1>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
