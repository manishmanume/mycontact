import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [activeTab, setactiveTab ] = useState("Home")
    const location = useLocation()

    useEffect(() => {
        if(location.pathname === "/") {
            setactiveTab("Home")
        }else if(location.pathname === "/Add") {
            setactiveTab("AddContact")
        }
        else if(location.pathname === "/About") {
            setactiveTab("About")
        }
    }, [location])
  return (
    <div className='header'>
        <div className="logo">Contact App</div>
        <div className="header-right">
           <Link to='/'>
            <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={()=> setactiveTab("Home") }>
                Home
            </p>

           </Link>
           <Link to='/Add'>
           <p className={`${activeTab === "AddContact" ? "active" : ""}`} onClick={()=> setactiveTab("AddContact") }>
                Add Contact
            </p>

           </Link><Link to='/About'>
            {/* <p className={`${activeTab === "About"} ? "active" : ""`} onClick={()=> setactiveTab("About") }>
                About 
            </p> */}

           </Link>
        </div>
      
    </div>
  )
}

export default Header
