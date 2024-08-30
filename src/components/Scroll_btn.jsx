import { useEffect } from 'react';
import '../style/scroll_top.css'

export default function ScrollToTop() {
    useEffect(() => {
        const scrollToTop = document.querySelector('.scroll-to-top');

        const handleShadowScroll = () => {
            if (window.scrollY > 500) {
                scrollToTop.classList.add('active');
            } else {
                scrollToTop.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleShadowScroll);
          
        return () => {
            window.removeEventListener('scroll', handleShadowScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div 
            className="scroll-to-top fixed right-0 bottom-0 cursor-pointer mr-10 mb-5"
            onClick={handleClick}
        >
            <div className="circle">
                <i className="fa fa-angle-up text-slate-100 text-[40px] px-2 py-1.5 bg-sky-500"></i>
            </div>
        </div>
    );
}
