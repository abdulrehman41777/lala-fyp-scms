import React from 'react'
import { useContext } from 'react';
import myContext from '../../context/context';



const Weekly = () => {
    const { close } = useContext(myContext);
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
    <h1 className='text-light container'> Weekly</h1>
    </div>
  )
}

export default Weekly;

