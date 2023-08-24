import '../styles/Navbar.scss';
import Link from 'next/link';
import Image from "next/image";
import {CustomButton} from "@/components/index";
function Navbar() {

    return (
        <header className="header">
            <nav className="header__nav">
                <Link href="/" className='header__link'>
                    <Image src={'./logo.svg'} alt={'Car hub logo'} width={118} height={18} className="header__logo"/>
                </Link>
                <CustomButton title={'Sign In'} btnType='button' additionalStyles='custom-btn-nav'/>

            </nav>
        </header>
    )
}

export default Navbar;
