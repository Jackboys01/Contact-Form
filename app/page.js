"use client"

import Navbar from '@/Components/Navbar'
import Context from '@/Components/Context'

import Form from '@/Components/Form'
const page = () => {
  
  return (
    <div className='h-screen '>
    <Navbar/>
    <Form />
    <Context/>
    
    </div>
  )
}

export default page