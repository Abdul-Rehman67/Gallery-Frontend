import React, { useEffect, useState } from 'react'
import ImagesViewer from '../components/ImagesViewer'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from '../apis/axios'
import { GET_IMAGES } from '../apis/apiRoutes';



const UserProfile = () => {
  const { id } = useParams();


  const [imageData,setImageData]=useState([]) 

  const  getImageData = async()=>{
    const result = await axios.get(`${GET_IMAGES}/${id}`)
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
 <h1 className='mt-5 text-2xl'>
       Abdul Rehman Shaikh
    </h1>

    <h1 className='mt-5 text-2xl'>
        Abdul's Images
    </h1>
  <ImagesViewer images={imageData}/>
</div>
</>  )
}

export default UserProfile