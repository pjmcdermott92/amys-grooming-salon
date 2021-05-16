import React from 'react';
import Image from 'next/image';
import s from './About.module.scss';

const About = () => {
    return (
        <section id="about" className={s.aboutSection}>
            <div className={s.aboutBackground}></div>
            <div className="container">
                <div className={s.flexContainer}>
                    <Image
                        src="/amy.png"
                        alt="Amy"
                        width={445}
                        height={445}
                    />
                    <div className="contentBox">
                        <h2>Welcome to</h2>
                        <h1 className="accentFont">Amy's Dog Grooming!</h1>
                        <p>My name is Amy Butler and I have been very blessed in my life to have been able to have a job I absolutely love. I have had the honor of grooming dogs for over 20 years and have enjoyed every bit of it. I strive very hard to have a sense of comfort and calmness for each dog during their visit.</p>
                        <div style={{textAlign: 'center', padding: '.5rem 0'}}>
                            <Image
                                src="/bone.png"
                                alt="Bone"
                                aria-hidden={true}
                                width={87}
                                height={37}
                            />
                        </div>
                        <p>I have 2 dogs of my own, Buddy, a Jack Russell mix and Daisy, a Yorkie mix. Along with my son Justin and my husband Mike, they all bring much joy to my life.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
