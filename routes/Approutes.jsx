import { createBrowserRouter } from "react-router-dom"
import Home from "../src/Components/Home/Home"
import Applayout from "../layout/Applayout"
import Login from "../src/Components/Login/Login"
import Register from "../src/Components/Register/Register"
import SearchFlights from "../src/Components/Searchflights/Searchflights"
import Hotels from "../src/Components/hotels/hotels"
 import Profile from "../src/Components/Profile/Profile"
import BookFlight from "../src/Components/BookFlight/BookFlight"

const Approutes = createBrowserRouter([{
    path: "/",
    element: <Applayout />,
    children: [{
        path:"/",
        element:<Home/>
    },{
        path:"/login",
        element:<Login/>
    },{
        path:"/register",
        element:<Register/>
    },{
        path:"/searchflights",
        element:<SearchFlights/>
    },{
        path:"/hotels",
        element:<Hotels/>
    },{
        path:"/book/:flightNumber",
        element:<BookFlight/>
    },{
        path:"/Profile/:userEmail",
        element:<Profile/>
    }
]
}])

export default Approutes