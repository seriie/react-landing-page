// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import More from './components/More';
import MyAlerts from './components/My_alerts';
import ScrollToTop from './components/Scroll_btn';
import Loading from './components/loading';
import ScrollBar from './components/Scroll_bar';
import Auth from './auth/auth';
import './App.css';
import './style/dark-mode.css';
import './style/slider.css';
import './style/responsive.css';

function Logo() {
  return (
    <div onClick={() => location.reload()} className="hitech-logo cursor-pointer font-black ease-in duration-200 text-5xl">
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

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const body = document.body;

  useEffect(() => {
    if (window.scrollY > 500) {
      body.classList.add('active');
    } else {
      body.classList.remove('active');
    }
  });

  useEffect(() => {
    const handleShadowScroll = () => {
      if (window.scrollY > 500) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadowScroll);

    return () => {
      window.removeEventListener('scroll', handleShadowScroll);
    };
  });

  useEffect(() => {
    const handleHeaderScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else if (window.scrollY < 10) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleHeaderScroll);

    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, []);

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowAuth(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setShowAuth(false);
  };

  function Head() {
    return (
      <>
        <div className='app-headers'>
          <div
            className={`app-head fixed top-0 right-0 left-0 text-slate-50 flex items-center justify-between p-5 transition-colors duration-300 ${
              shadow ? 'shadow-black' : ''
            } ${scrolled ? 'shadow-white backdrop-blur-[5px]' : 'bg-transparent'}`}
          >
            <Logo />
            <Header />
            <ScrollBar />
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

  return (
    <>
    <Loading />
      {showAuth ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <MyAlerts />
          <Head />
          <SideBar 
            toggleAuth={toggleAuth} 
            isAuthenticated={isAuthenticated} 
            handleLogout={handleLogout} 
          />
          <Home />
          <About />
          <Product />
          <More />
        </div>
      )}
      <ScrollToTop />
    </>
  );
}

export default App;