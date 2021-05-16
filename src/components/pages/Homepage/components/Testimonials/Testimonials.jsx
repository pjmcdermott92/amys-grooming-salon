import React from 'react';
import Image from 'next/image';
import s from './Testimonials.module.scss';

const Testimonials = () => {

    const TESTIMONIES = [
        {
            name: 'Chelse McGuire',
            image: null,
            testimony: '“My Ellie girl absolutely hates having her paws touched, but when I saw her chewing her dew claw I knew it was time to get her nails trimmed. It was my first time using Amy’s, when I called they squeezed us in within two days! The ladies loved my Ellie, and they were super quick and handled her great! We were in and out in less than 10 minutes for just a nail trim, but next time I plan to do the whole treatment! Friendly staff who clearly love the animals and the job”'
        },
        {
            name: 'Dave Hobbs',
            image: '/whitedog.png',
            testimony: '“Amy\'s is awesome!  Went there on the recommendation of a friend and was not disappointed.  Curly got the best groom he’s ever had!  Their prices can’t be beat either for the quality of the work. Highly recommend!”'
        },
        {
            name: 'Dave Hobbs',
            image: null,
            testimony: '“This was our second visit to Amy’s and I’m never going anywhere else! I had to wait about a month until my days off work corresponded with their schedule and it’s absolutely worth it! They’re so kind and gentle with my sweet old guy and his breed-specific cut is always ON POINT! Plus they’re similarly priced, if not less expensive, than the big chain stores!”'
        },
    ];

    return (
        <section id="testimonials" className="container">
            <div className={s.testimonialsSection}>
                <h1>
                    Testimonials from <br />
                    <span className="accentFontLight">Happy</span> Dogs &amp; <span className="accentFontLight">Happy</span> Owners!
                </h1>
                <div className={s.testimonialsWrapper}>
                    {
                        TESTIMONIES.map((testimonial, index) => {
                            const { name, image, testimony } = testimonial;
                            return (
                                <div key={index} className={s.testimony}>
                                    {testimony}
                                    <p>- {name}</p>
                                    {
                                        image ? (
                                            <div className={s.testimonyImage}>
                                                <Image
                                                    src={image}
                                                    alt={name}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        ) : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;