import React from 'react'
import Sidebar from './Sidebar'
import Application from './Application'

const Home = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Application/>
        </div>
    </div>
  )
}

export default Home