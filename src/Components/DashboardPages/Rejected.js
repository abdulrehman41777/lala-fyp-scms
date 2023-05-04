import React from 'react'

import { useContext } from 'react';
import myContext from '../../context/context';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';


const Rejected = () => {
  const { close } = useContext(myContext);


  return (
    <>
    <Topbar />
    <Sidebar />
      <div className={close ? "DashboardFull" : "Dashboard"}>
        <h1 className='text-light container'>   Rejected Queries </h1>
      </div>
    </>
  )
}


export default Rejected
