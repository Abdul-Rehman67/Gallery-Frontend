import React from 'react'
import ImageUpload from '../components/ImageUpload'
import ImagesViewer from '../components/ImagesViewer'


const MyProfile = () => {
  return (
<>
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
 <h1 className='mt-5 text-2xl'>
        Welcome to your gallery! 
    </h1>
 <div className='mt-5 flex justify-between items-center w-full h-full'>
    <div className='w-full'>
     <ImageUpload/>

    </div>
   
</div>
    <h1 className='mt-5 text-2xl'>
        My Images
    </h1>
  <ImagesViewer/>
</div>






</>




    
)
}

export default MyProfile
// <>
// <div>MyProfile</div>

// </>