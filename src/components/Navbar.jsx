import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const isAuth = localStorage.getItem("isAuthenticated")
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/')
    }

   return  (
        <div className="grid  w-full place-items-center overflow-x-scroll rounded-lg p-6">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
              <div className="flex items-center justify-between text-blue-900">
                <a
                  href="#"
                  className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
                >
                  Gallery
                </a>
                <div className="flex items-center gap-4">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-900">
                    {isAuth ?  <Link to="/my-profile" className="flex items-center">
                        My Profile
                      </Link>:''}
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-900">
                      <Link to="/all-profiles" className="flex items-center">
                        All Profiles
                      </Link>
                    </li>
                  </ul>
                  <div className="flex items-center gap-x-1">
                    <button
                      onClick={handleLogout}
                      className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      {isAuth ? (
                        <span>Sign Out</span>
                      ) : (
                        <Link to="/" className="text-white">
                          Sign In
                        </Link>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      );
}

export default Navbar