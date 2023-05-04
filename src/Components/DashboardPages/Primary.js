import React from 'react'

import { useContext } from 'react';
import myContext from '../../context/context';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';



const Primary = () => {
  const { close } = useContext(myContext);


  return (
    <>
    <Topbar />
    <Sidebar />
      <div className={close ? "DashboardFull" : "Dashboard"}>
        <h1 className='text-light container'>
          Primary
        </h1>
      </div>
    </>
  )
}

export default Primary;
