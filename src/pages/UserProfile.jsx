import React from 'react'
import ImagesViewer from '../components/ImagesViewer'
import Navbar from '../components/Navbar'

const UserProfile = () => {
  return (
<>
{/* <Navbar/> */}
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
 <h1 className='mt-5 text-2xl'>
       Abdul Rehman Shaikh
    </h1>

    <h1 className='mt-5 text-2xl'>
        Abdul's Images
    </h1>
  <ImagesViewer/>
</div>
</>  )
}

export default UserProfile