import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import Events from "./pages/Events"
import Organize from "./pages/Organize"
import Adminlog from "./pages/Adminlog"
import Admin from "./pages/Admin"
import Booking from "./pages/Booking"
import Profile2 from "./pages/Profile"
import User from "./pages/User"
import AdHosting from "./pages/AdHost"
import AdEvent from "./pages/AdEvent"
import Bking from "./pages/Bking"
import AddEvent from "./pages/Addevent"


function App() {
const router=createBrowserRouter(
  [
  {
    path:'/',
    element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
  },
  {
    path:'/Signup',
    element:<Suspense fallback={<Signup/>}><Signup/></Suspense>
  },
  {
    path:'/Home',
    element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
  },
  {
    path:'/Events',
    element:<Suspense fallback={<Spinner/>}><Events/></Suspense>
  },
  {
    path:'/Organize',
    element:<Suspense fallback={<Spinner/>}><Organize/></Suspense>
  },
  {
    path:'/Admin',
    element:<Suspense fallback={<Spinner/>}><Adminlog/></Suspense>
  },
  {
    path:'/TicketGo',
    element:<Suspense fallback={<Spinner/>}><Admin/></Suspense>
  },
  {
    path:'/Booking',
    element:<Suspense fallback={<Spinner/>}><Booking/></Suspense>
  },
  {
    path:'/Profile',
    element:<Suspense fallback={<Spinner/>}><Profile2/></Suspense>
  },
  {
    path:'/InfoT',
    element:<Suspense fallback={<Spinner/>}><User/></Suspense>
  },
  {
    path:'/Hostings',
    element:<Suspense fallback={<Spinner/>}><AdHosting/></Suspense>
  },
  {
    path:'/EventDetails',
    element:<Suspense fallback={<Spinner/>}><AdEvent/></Suspense>
  },
  {
    path:'/booka/:param1/:param2',
    element:<Suspense fallback={<Spinner/>}><Bking/></Suspense>
  },
  {
    path:'/addevent',
    element:<Suspense fallback={<Spinner/>}><AddEvent/></Suspense>
  }
]
)
  return (
    <RouterProvider router={router}/>
    
    
  )
}

export default App
