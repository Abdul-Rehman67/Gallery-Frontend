import React, { useEffect, useState } from 'react'
import ImageUpload from '../components/ImageUpload'
import ImagesViewer from '../components/ImagesViewer'
import Navbar from '../components/Navbar'
import axios from '../apis/axios'
import { GET_IMAGES } from '../apis/apiRoutes'


const MyProfile = () => {
const [imageData,setImageData]=useState([]) 
const getImageData = async()=>{
const result = await axios.get(`${GET_IMAGES}/${localStorage.getItem('id')}`)
setImageData(result?.data?.payload?.result)
console.log("result of image data",result);
}
useEffect(()=>{
  console.log("hi")
getImageData()

},[])

  return (
<>
<Navbar/>
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
Welcome yo your Gallery!
 <h1 className='mt-5 text-2xl'>
       Upload Your Images
    </h1>
 <div className='mt-5 flex justify-between items-center w-full h-full'>
    <div className='w-full'>
     <ImageUpload/>

    </div>
   
</div>
    <h1 className='mt-5 text-2xl'>
        My Images
    </h1>
  <ImagesViewer images={imageData} />
</div>






</>




    
)
}

export default MyProfile
// <>
// <div>MyProfile</div>

// </>