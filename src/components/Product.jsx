import { useEffect } from 'react';
import '../style/product.css';
import iphone from '../images/iphone.png';
import ipad from '../images/ipad.png';
import appleWatch from '../images/apple-watch.png';
import airpods from '../images/airpods.png';

export default function Product() {
    useEffect(() => {
        const handleScroll = () => {
            const products = document.querySelectorAll('.products');
            products.forEach((product, index) => {
                const position = product.getBoundingClientRect();
                if (position.top <= window.innerHeight * 0.75) {
                    setTimeout(() => {
                        product.classList.add('active');
                    }, index * 100);
                } else {
                    product.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='product mt-[500px]' id='product'>
            <div className='container flex m-auto justify-between '>
                <div className='products product1'>
                    <div className='image'>
                        <div className='hover-me'>Hover/Hold Me</div>
                        <img className='iphone' src={iphone} alt="iPhone"></img>
                    </div>
                    <div className='title'>iPhone</div>
                    <div className='product-description iphone'>
                        The latest iPhone model featuring advanced camera systems, longer battery life, and more powerful processors.
                    </div>
                </div>
                <div className='products product2'>
                    <div className='image'>
                        <div className='hover-me'>Hover/Hold Me</div>
                        <img className='ipad' src={ipad} alt="iPad"></img>
                    </div>
                    <div className='title'>iPad</div>
                    <div className='product-description ipad'>
                        The iPad offers a sleek design with a high-resolution display, ideal for media consumption and productivity on the go.
                    </div>
                </div>
                <div className='products product3'>
                    <div className='image'>
                        <div className='hover-me'>Hover/Hold Me</div>
                        <img className='apple-watch' src={appleWatch} alt="Apple Watch"></img>
                    </div>
                    <div className='title'>Apple Watch</div>
                    <div className='product-description apple-watch'>
                        Stay connected, active, and healthy with the Apple Watch, featuring various health and fitness tracking capabilities.
                    </div>
                </div>
                <div className='products product4'>
                    <div className='image'>
                        <div className='hover-me'>Hover/Hold Me</div>
                        <img className='airpods' src={airpods} alt="AirPods"></img>
                    </div>
                    <div className='title'>AirPods</div>
                    <div className='product-description airpods'>
                        Experience true wireless freedom with AirPods, delivering high-quality sound and seamless connectivity.
                    </div>
                </div>
            </div>
        </div>
    );
}