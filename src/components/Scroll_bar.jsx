import { useEffect } from "react";

export default function ScrollBar() {
    useEffect(() => {
        const scrollBar = document.querySelector('.scroll-bar');
        document.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            scrollBar.style.width = (scrollPosition / scrollHeight) * 100 + '%';
        });
    });

    const style = {
        transitionScrollBar : {
            transition: "1s ease",
        }
    }

    return (
        <>
            <div style={style.transitionScrollBar} className="scroll-bar h-1 bg-green-400 absolute left-0 top-0"></div>
        </>
    )
}