import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>hello from admin</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
