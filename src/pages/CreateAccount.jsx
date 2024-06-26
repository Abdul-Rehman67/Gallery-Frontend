import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CREATE_ACCOUNT, LOG_IN } from "../apis/apiRoutes";
import axios from '../apis/axios'
import Navbar from "../components/Navbar";


const CreateAccount = () => {
const [loading,setLoading] = useState(false); 
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    let  emailPattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (
      Object.keys(formData).some((key) => formData[key] === "") ||
      Object.keys(formData).length < 5
    ) {
      alert("all fields are required");
      return
    }
    if (!emailPattern.test(formData.email)) {
      alert("Incorrect email address");
      return;
    }

     else {
        setLoading(true)
        const response = await  axios.post(CREATE_ACCOUNT, formData);
        if (response.data.success) {
          setLoading(false)
          navigate("/");

         
         
        } else {
          setLoading(false)

          alert(response.data.message);
        }

    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {}, []);
  return (
    <>
    <div className="">

<Navbar/>
</div>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="container md:w-5/12 w-full mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div>
              <form onSubmit={handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstname"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastname"
                placeholder="Last Name"
                onChange={handleChange}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="bio"
                placeholder="Write few words about your self"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                onClick={handleSubmit}
              >
                {loading ? "Please wait..." : "Create"}
              </button>

              </form>
              
              <div className="text-grey-dark mt-6"onKeyDown={handleKeyDown}>
                Already have an account?
                <Link to={"/"}>
                  <span className="text-blue-500 no-underline border-b border-blue-500 text-blue">
                    Log in
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;