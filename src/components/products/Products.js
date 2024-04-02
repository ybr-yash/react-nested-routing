import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <div className="productsNav">
        <NavLink to="/products/search"> Search </NavLink>
        <NavLink to="/products/list"> List </NavLink>
        <NavLink to="/products/add"> Add </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default Products