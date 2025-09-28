
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home_page from './components/Home_page'
import About_page from './components/About_page'
import Project_page from './components/Project_page'
import Image from './assets/image.png'
import Notfound from './components/Notfound'
import Code from './assets/Code.png'
import Webdev from './assets/Webdev.png'

function App() {
 let route=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home_page image={Image}/>
    },
    {
      path:"/about",
      element:<About_page name="kaushiki kesharwani" image={Image}/>
    },
    {
      path:"/Project",
      element:<Project_page code={Code} webdev={Webdev} leet="https://leetcode.com/problemset/" hackerrank="https://www.hackerrank.com/dashboard" react="https://github.com/Kaushiki-Kesarwani/React" web="https://github.com/Kaushiki-Kesarwani/Web-Development"/>
    },
    {
      path:"*",
      element:<Notfound/>
    }
  ]
 )

  return (
    <>
    <RouterProvider router={route}/>

    </>
  )
}

export default App

