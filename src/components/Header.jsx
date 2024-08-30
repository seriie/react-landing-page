import React, { useEffect, useState } from 'react';

export default function Header() {

    useEffect(() => {
        document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'start'
                    });
                }
            });
        });

        document.querySelectorAll('a[href^="#product"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'start'
                    });
                }
            });
        });
    }, []);

    return (
        <>
            <div className="app-header text-slate-900">
                <div className={`ul font-bold text-slate-100 text-[20px] flex gap-20 md:flex`}>
                    <div className="li"><a className="home-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#home" rel="">Home</a></div>
                    <div className="li"><a className="about-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#about" rel="">About</a></div>
                    <div className="li"><a className="product-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#product" rel="">Product</a></div>
                    <div className="li"><a className="more-header focus:outline-none hover:text-cyan-400 ease-in duration-200" href="#more" rel="">More</a></div>
                </div>
            </div>
        </>
    );
}