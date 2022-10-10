import React from "react";

import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/admin/search">Admin Home Page</Link>
        <Link to="/admin/list"> Admin Product List </Link>
        <Link to="/admin/add"> Admin Product Add </Link>
      </div>
      <h1>Admin Page</h1>
      <Outlet />
    </div>

  );
}

export default Admin;