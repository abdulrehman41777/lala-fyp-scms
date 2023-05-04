import React, { useContext } from "react";
import myContext from "../context/context";
import MenuList from "./SidebarContent/MenuList";

const Sidebar = () => {
  const { close, closeSidebar } = useContext(myContext);

  const menuData = [
    {
      title: "Dashboard",
      options: [
        "Pending",
        "Complaints",
        "Rejected",
      ],
      faClass: "fa fa-th-large",
      path: [
        "/dashboard/pending",
        "/dashboard/complaints",
        "/dashboard/rejected",
      ],
    },
   
  ];

  return (
    <div className={close ? "sidebar-hide" : "sidebar"}>
      <div className="close">
        <span onClick={closeSidebar}>X</span>
      </div>
      <div className="sidebar-heading">
        <i class="fa fa-cube dash-logo" aria-hidden="true"></i>
        <h2 className="dashboar_logo">EcMAI</h2>
      </div>
      <div className="sidebar-menu">
        <div className="menu">
          {menuData.map((data, index) => (
            <MenuList key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
