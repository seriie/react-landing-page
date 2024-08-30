import '../style/more.css';

export default function More() {
    return (
        <footer className='more mt-[500px]' id='more'>
            <div className='container gap-[10px] flex-wrap'>
                <div className='social-media w-[120px]'>
                    <h3 className='font-medium'>Follow Us</h3>
                    <ul>
                        <li><a href='https://instagram.com/zzzeeee05' target='_blank'><i className='fab fa-instagram'></i> Instagram</a></li>
                        <li><a href='https://github.com/seriie' target='_blank'><i className='fab fa-github'></i> Github</a></li>
                        <li><a href={`https://wa.me/6285156346349?text=halo+kak+zee`} target='_blank'><i className='fab fa-whatsapp'></i> Whatsapp</a></li>
                        <li><a href='mailto:mohammadzidane058@gmail.com' target='_blank'><i className='fas fa-envelope'></i> Mail</a></li>
                    </ul>
                </div>
                <div className='creator w-[500px]'>
                    <h3 className='font-medium'>About the Creator</h3>
                    <p>Developed by Zee. Passionate about creating interactive web experiences and bringing ideas to life.</p>
                </div>
                <div className='contact'>
                    <h3 className='font-medium'>Contact Us</h3>
                    <p>Email: HiTech@support.id</p>
                </div>
            </div>
            <div className='bottom-bar'>
                <p>&copy; 2024 HiTech Company. All rights reserved.</p>
            </div>
            <div className='madewith text-center absolute w-full'>Made with ❤️ By: <a className='zee text-cyan-400 font-bold' href='https://instagram.com/zzzeeee05' target='blank'>Zee</a></div>
        </footer>
    )
}