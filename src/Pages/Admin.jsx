import React from 'react'
import Slidebar from '../components/Slidebar/Slidebar'
import {Route,Routes} from "react-router-dom"
import Addproduct from '../components/Add product/Addproduct'
import Listproduct from '../components/List product/Listproduct'
const Admin = () => {
  return (
    <div className='lg:flex w-[100%]'>
      <Slidebar/>
    <Routes>
      <Route path='/' element={<Addproduct/>}></Route>
      <Route path='/addproduct' element={<Addproduct/>}></Route>
      <Route path='/listproduct' element={<Listproduct/>}></Route>
    </Routes>
    </div>
  )
}

export default Admin