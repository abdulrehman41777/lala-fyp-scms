import React from 'react'
import { useContext } from 'react';
import myContext from '../../context/context';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';



const Complaints = () => {
  const { close } = useContext(myContext);

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={close ? "DashboardFull" : "Dashboard"}>
        <h1 className='text-light container'>
          Complaints
        </h1>
      </div>
    </>
  )
}



export default Complaints;