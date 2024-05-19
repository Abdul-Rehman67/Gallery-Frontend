import React from 'react'

const ImagesViewer = ({images}) => {
  console.log(images)
  return (
    <div className="-m-1 flex flex-wrap md:-m-2 -bg-red-500 h-full">
      {images.map((src, index) => (
        <div key={index} className="flex w-1/3 flex-wrap -bg-blue-500 p-2 mt-5">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={src?.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImagesViewer