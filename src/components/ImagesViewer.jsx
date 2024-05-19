import React, { useState } from 'react'
import { DELETE_IMAGES } from '../apis/apiRoutes';
import axios from '../apis/axios'
import { Link } from 'react-router-dom';

const ImagesViewer = ({images,isDelete}) => {

  
  const isAuth = localStorage.getItem("isAuthenticated")
  const handleDelete =async  (index) => {
    console.log("Delete image at index:", index);
    const result = await axios.get(`${DELETE_IMAGES}/${index}`)
    if(result.data.success){
       images = images.filter((image, i) => image._id !== index);
       console.log(images)
       window.location.reload(); // Reload the page after successful deletion


      
    }

  };
  return (
    <div className="relative">
      {/* Images */}
      <div className="-m-1 flex flex-wrap md:-m-2 h-full">
        {images?.map((src, index) => (
          <div key={index} className="relative flex w-1/3 flex-wrap p-2 mt-5">
            {/* Delete icon */}
            {isDelete && (
              <button
                onClick={() => handleDelete(src._id)}
                className="absolute top-0 right-0 z-10 bg-red-500 text-white rounded-full p-1 shadow-md"
              >
                Remove
              </button>
            )}

            {/* Blurry overlay and sign-in button */}
            {!isAuth && src.isPrivate && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link to = '/login'className="bg-gray-800 bg-opacity-75 text-white rounded-full px-4 py-2">
                  Sign In to View
                </Link>
              </div>
            )}

            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className={`block h-full w-full rounded-lg object-cover object-center ${
                  !isAuth && src.isPrivate ? 'filter blur-lg' : '' 
                }`}
                src={src.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesViewer