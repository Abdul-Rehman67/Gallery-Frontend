import React, { useEffect, useState } from 'react';
import { Upload, Checkbox, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from '../apis/axios';
import { GET_PROFILE, UPLOAD_IMAGE } from '../apis/apiRoutes';
import UpateProfile from './UpateProfile';

const UserProfile = () => {
  const [fileList, setFileList] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    bio: '',
  });
  const [previousData,setPreviousData]=useState({})

  useEffect(()=>{
    getUserData();

  },[])
  const onChangeIsPrivate = (e) => {
    setIsPrivate(e.target.checked);
  };

  const onChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 1) {
      newFileList = [newFileList[newFileList.length - 1]];
    }
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', fileList[0].originFileObj);
    formData.append('isPrivate', isPrivate);

    try {
        setLoading(true)
      const response = await axios.post(UPLOAD_IMAGE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.data.success){
        setLoading(false)
        setFileList([])
        alert('Image uploaded successfully!')
        window.location.reload(); 
      }
      else{
        setLoading(false)
        alert('Upload failed');
      }
    } catch (error) {
      console.log(error)
        setLoading(false)
      alert('Upload failed:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getUserData = async () => {
    try {
     
    const response = await axios.get(`${GET_PROFILE}/${localStorage.getItem('id')}`)
    if(response.data.success){
      console.log(response.data)
      let user = response?.data?.payload?.data
    }
  }
  catch(e){
    console.log(e)
alert('Something went wrong',e)
  }
    
  };
 
  const handleSubmit = async () => {
    console.log('User data:', userData);
  };

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <UpateProfile/>
     
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <label className="block text-gray-700 mb-2">Upload Pictures</label>
       
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && '+ Upload'}
            </Upload>
         
          <Checkbox onChange={onChangeIsPrivate} className="mt-2">Private?</Checkbox>
          <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-500 focus:outline-none my-1"
                onClick={handleUpload}
                disabled={loading}
              >
                {!loading ? ' Save' : 'Please wait...'}
                 
              </button>        </div>
      </div>
    </div>
  );
};

export default UserProfile;
