import React from 'react';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import s from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section id="hero" className={s.hero}>
            <div className="container">
                <Navbar />
                <div className={s.heroBody}>
                    <div className={s.heroContent}>
                        <h1>
                            We Make Your <span>Pets</span><br />
                            Look Their <span>Best!</span>
                        </h1>
                        <p>Book an Appointment Today to make your dog feel - and look - their best! Our spa is like a “home-away-from-home” for your furry friend!</p>
                        <Button value="Make an Appointment" color='primary' />
                    </div>
                    <div className={s.heroDog}>
                        <Image
                            width={425}
                            height={470}
                            src='/pug.png'
                            alt='Hero Pug'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;