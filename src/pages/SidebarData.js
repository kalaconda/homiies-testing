import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: "Getting Started",
        path: "/onboarding1",
        icon: <BsIcons.BsFillPersonFill />,
        cName: "nav-text"
    },
    {
        title: "Tasks",
        path: "/tasks",
        icon: <FaIcons.FaTasks />,
        cName: "nav-text"
    }
];  