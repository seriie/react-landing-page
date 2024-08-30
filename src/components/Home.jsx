import { useEffect } from "react";
import '../style/home.css'
import gadget from '../images/gadget.png';

export default function Home() {
    useEffect(() => {
        const right = document.querySelector('.right');
        const left = document.querySelector('.left');

        if (right || left) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    left.classList.add('active');
                    right.classList.add('active');
                }, 50);
            });
        }
    }, []);

    return (
        <>
        <div className="home mt-[200px] flex gap-[100px] justify-evenly flex-wrap flex-row-reverse">
            <div className="left">
                <image className="image">
                    <img className="max-w-[450px] -translate-y-[100px]" src={gadget} alt="all_gadget"></img>
                </image>
            </div>
            <div className="right">
                <div className="title">
                    <div className="hitech text-[80px] text-slate-100">HiTech</div>
                </div>
                <div className="text font-bold text-slate-50 text-[30px]">Anytime, Anywhere, Forever</div>
            </div>
        </div>        
        </>
    )
}