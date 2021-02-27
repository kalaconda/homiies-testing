import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <HiIcons.HiHome />,
        cName: "nav-text"
    },
    {
        title: "Tasks",
        path: "/tasks",
        icon: <FaIcons.FaTasks />,
        cName: "nav-text"
    }
];  