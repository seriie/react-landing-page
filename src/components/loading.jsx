// components/Loading.jsx
import React, { useState, useEffect } from 'react';
import '../style/loading.css'

function Loading() {
  const [loading, setLoading] = useState(true);
  const body = document.body;
  
  useEffect(() => {
    body.classList.add('loading');

    const randomTimer = [
        500, 1000, 1500, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000
    ];

    const time = randomTimer[Math.floor(Math.random() * randomTimer.length)];

    const timer = setTimeout(() => {
        body.classList.remove('loading');
        setLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className='hitech-loading absolute font-black text-[50px]'>HiTech</div>
        <div className='line-loading line1'></div>
        <div className='line-loading line2'></div>
      </div>
    );
  }

  return null;
}

export default Loading;