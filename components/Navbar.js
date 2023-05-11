import Image from "next/image";
import Link from "next/link";
import logo from '../public/assets/logo.png';
import { navLinks } from "@/data";

const Navbar = () => {
    return (
        <div className="-container py-9 grid grid-flow-col grid-cols-2 items-center">
            <Image placeholder="blur" src={logo} alt="omnigpt" />
            <nav>
                <ul className="flex justify-between">
                    {navLinks.map((navLink) => {
                        const { id, text, link } = navLink;
                        return (
                            <li key={id}>
                                <Link className="text-lg transition hover:font-bold" href={link}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;