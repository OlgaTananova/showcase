'use client';
import '../styles/Hero.scss';
import {CustomButton} from "@/components/index";
import Image from "next/image";
import heroImage from '../public/hero.png';
function Hero() {
    function handleScroll() {

    }

    return (
        <div className='hero'>
            <div className='hero__section'>
                <h1 className="hero__title">Find, book, or rent a car -- quickly  and easily!</h1>
                <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
                <CustomButton title='Explore cars'
                              handleClick={handleScroll}/>
                <div className='hero__image-container'>
                    <div className="hero__image">
                        <Image src={heroImage} fill style={{objectFit: 'contain'}} alt={'Hero'} />
                        <div className='hero__image-overlay'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
