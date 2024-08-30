// SideBar.jsx
import React, { useState, useEffect } from 'react';
import '../style/sidebar.css';
import '../style/responsive.css';

function Logo() {
    return (
      <div onClick={() => location.reload()} className="hitech-logo cursor-pointer font-black ease-in duration-200 text-[40px]">
        HiTech
      </div>
    );
}

function LoginButton({ toggleAuth, isAuthenticated, handleLogout }) {
    return (
      <button
        onClick={isAuthenticated ? handleLogout : toggleAuth}
        className="loginBtn font-bold text-[20px] hover:text-yellow-400 ease-in duration-200"
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    );
}

function HeadSideBar() {
    return (
        <>
            <div className="ul font-bold text-slate-100 text-[20px] flex flex-col gap-10">
                <div className="li"><a className="home-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#home">Home</a></div>
                <div className="li"><a className="about-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#about">About</a></div>
                <div className="li"><a className="product-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#product">Product</a></div>
                <div className="li"><a className="more-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#more">More</a></div>
            </div>
        </>
    );
}

export default function SideBar({ toggleAuth, isAuthenticated, handleLogout }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='app-sidebar-headers'>
                <div className='icon fixed top-0 text-slate-100 p-2 cursor-pointer text-[30px]' onClick={toggleSidebar}>
                    &#9776;
                </div>
                <div
                  className={`app-head fixed top-0 left-0 text-slate-50 items-center p-5 transition-all duration-300 ${isSidebarOpen ? 'active' : ''}`}
                >
                    <div className="close-btn text-[30px] cursor-pointer absolute top-5 right-5" onClick={toggleSidebar}>
                        &times;
                    </div>
                    <Logo />
                    <HeadSideBar />
                    <LoginButton 
                      toggleAuth={toggleAuth} 
                      isAuthenticated={isAuthenticated} 
                      handleLogout={handleLogout} 
                    />
                </div>
            </div>
        </>
    );
}
