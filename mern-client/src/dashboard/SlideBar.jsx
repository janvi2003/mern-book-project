import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiUser, HiTable, HiViewBoards, HiHome } from "react-icons/hi";
import { AuthContext } from '../contexts/AuthProvider';

const SlideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo 
        href="/" 
        img={user?.photoURL} 
        imgAlt="logo"
        className='w-6 h-16 rounded'
      >
        <p>{user?.displayName || "Demo User"}</p>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard/upgrade" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/documentation" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/help" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SlideBar;
