import React, { useEffect, useState } from 'react'
import image1 from '../images/image2.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from '../apis/axios'
import { GET_USERS } from '../apis/apiRoutes'
const AllProfiles = () => {
  const [userData , setUserData] = useState([])


  const getUserData = async () =>{
    const result = await axios.get(GET_USERS);
    console.log("haha",result?.data?.payload?.data);
    setUserData(result?.data?.payload?.data)
  }


  useEffect(()=>{
getUserData()
  },[])

  return (
    <>
<Navbar/>

    <h1 className='space-x-12 p-5 mt-5 text-2xl'>
    Welcome to gallery, where you find people memories 
</h1>
<div className='flex justify-start p-5 space-x-12 items-center space-around mt-5'>

{userData.length>0 ?userData.map((user, index) => (
<div class="-bg-red-500 w-2/12 h-[20rem] overflow-y-scroll  rounded overflow-hidden shadow-lg">
  <img class="w-full h-[10rem]" src={image1} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{user?.firstname}</div>
    <p class="text-gray-700 text-base  ">
      {user?.bio}
      </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <Link to ={`/user-profile/${user?._id}`} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">View</Link>
  </div>
</div>)):'Please wait'}

</div>


    </>


  )
}

export default AllProfiles