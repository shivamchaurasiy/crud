import React from "react";
import { Outlet, Link } from 'react-router-dom'
import "./Layout.css";


const Layout = () => {
  return (
    <>

      <nav class="navbar navbar-expand-sm bg-primary">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li className="nav-brand">
              <Link className="navbar-brand" to="#"><img src="images/logo.png" width="100"/></Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link text-light" to="/insert">Insert</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link text-light" to="/display">Display</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link text-light" to="/update">Update</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link text-light" to="/delete">Delete</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link text-light" to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />

      
      <div class="mt-5 bg-primary bg-dark text-light footer" style={{lineHeight:3}}>
        <p>All Rights Reserved. 2023 &copy; Designed by Shivam Chaurasiya</p>
      </div>
    </>
  );
}

export default Layout;