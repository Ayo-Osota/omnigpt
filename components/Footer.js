import logo from '../public/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='py-14 bg-black'>
            <div className='-container'>
            <Image placeholder="blur" src={logo} alt="omnigpt" />
            </div>
        </footer>
    )
}

export default Footer;