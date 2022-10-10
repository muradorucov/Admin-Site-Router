import React from "react";

import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/search">User Home Page</Link>
        <Link to="/list"> User Product List </Link>
        <Link to="/add"> USer Product Add </Link>
      </div>
      <h1>User Page</h1>
      <Outlet />
    </div>
  );
}

export default Home;
