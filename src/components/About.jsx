import { useEffect } from "react";
import '../style/about.css';

export default function About() {
    const msg = ['halo', 'kak', 'zee'];
    const message = msg.join('+');

    useEffect(() => {
        const handleLeftScroll = () => {
            var about = document.querySelector('.about-left');
            var position = about.getBoundingClientRect();
            
            if(position.top <= window.innerHeight * 0.64) {
                about.classList.add('active');
            }
        };

        const handleRightScroll = () => {
            var about = document.querySelector('.about-right');
            var position = about.getBoundingClientRect();
            
            if(position.top <= window.innerHeight * 0.64) {
                about.classList.add('active');
            }
        };

        document.addEventListener("scroll", handleLeftScroll);
        document.addEventListener("scroll", handleRightScroll);

        // Cleanup function untuk menghapus event listener saat komponen di-unmount
        return () => {
            document.removeEventListener("scroll", handleLeftScroll);
            document.removeEventListener("scroll", handleRightScroll);
        };
    }, []);

    return (
        <>
            <div className="about-container mt-[500px]" id="about">
                <div className="about flex justify-between flex-wrap px-[30px]">
                    <div className="about-left max-w-[700px]">
                        <div className="title font-bold text-slate-100 text-[40px]">About</div>
                        <div className="text text-slate-100">At HiTech, we bring the future to your fingertips. Our carefully curated gadgets combine innovation and quality, ensuring you stay ahead—anytime, anywhere, forever.</div>
                    </div>
                    <div className="about-right">
                        <div className='text'>
                        <div className="title font-bold text-slate-100 text-[40px]">Contact</div>
                        <div className="text text-slate-100 mb-[10px]">Contact us for more amazing thing anywhere you want</div>
                    </div>
                    <div className='socialMedia flex gap-4'>
                        <a href="" rel="noopener noreferrer">
                            <i className="fab fa-instagram text-slate-50 border-solid border-2 py-2 px-2.5 text-[20px] rounded-full border-slate-50"></i>
                        </a>
                        <a href={`https://wa.me/6285156346349?text=${message}`} target="__blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp hover:bg-green-500 text-slate-50 border-solid border-2 py-2 px-2.5 text-[20px] rounded-full border-slate-50"></i>
                        </a>
                        <a href="" rel="noopener noreferrer">
                            <i className="fab fa-github hover:bg-indigo-700 text-slate-50 border-solid border-2 p-2 text-[20px] rounded-full border-slate-50"></i>
                        </a>
                        <a href="" rel="noopener noreferrer">
                            <i className="fas fa-envelope hover:bg-red-600 text-slate-50 border-solid border-2 p-2 text-[20px] rounded-full border-slate-50"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}