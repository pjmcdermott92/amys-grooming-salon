import React from 'react';
import ContactForm from './ContactForm';
import Image from 'next/image';
import s from './ContactSection.module.scss';

const ContactSection = () => {

    const GALLERY_IMAGES = [
        { url: '/chidogs.png', alt: 'Chihuahuas' },
        { url: '/doggio.png', alt: 'Hapy Dog' },
        { url: '/whitedog.png', alt: 'Curly' },
        { url: '/interior.png', alt: 'Inside the Salon' },
        { url: '/interior-2.png', alt: 'Inside the Salon' },
        { url: '/bath.png', alt: 'The Bath Station' }
    ]

    return (
        <section id="contact" className={s.contactUs}>
            <div className={s.contactForm}>
                <h1>Schedule an <span className="accentFontLight">Appointment</span></h1>
                <p>Fill out the form below and we will contact you about the best day and time to bring your Furry Family Member in!</p>
                <ContactForm />
            </div>
            <div className={s.gallery}>
               {/* <Image
                    src="/amys-gallery.jpg"
                    alt="Amy's Photo Gallery"
                    layout="fill"
                    objectFit="cover"
               /> */}
            </div>
        </section>
    )
}

export default ContactSection
