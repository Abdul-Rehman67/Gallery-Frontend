import React, { useEffect, useState } from 'react';
import axios from '../apis/axios';
import { GET_PROFILE, UPDATE_PROFILE } from '../apis/apiRoutes';

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    console.log("update")
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
        setLoading(true)
      const response = await axios.get(`${GET_PROFILE}/${localStorage.getItem('id')}`);
      console.log("hi",response)
      if (response.data.success) {
        setLoading(false)
        setUserData(response.data.payload.data);
      }
    } catch (e) {
        console.log("e",e)
    //   alert('Something went wrong', e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log(userData)
        setLoading(true);
      
      const response = await axios.post(UPDATE_PROFILE, {userData});
      setLoading(false);
      if (response.data.success) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      setLoading(false);
      alert('Failed to update profile:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstname"
            value={userData.firstname}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
      <div>
        <div className="w-full">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-500 focus:outline-none my-1"
        onClick={handleSubmit}
        disabled={loading}
      >
        {!loading ? 'Update' : 'Please wait...'}
      </button>
    </div>
  );
};

export default UpdateProfile;
