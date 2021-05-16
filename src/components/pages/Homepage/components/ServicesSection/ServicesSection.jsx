import React from 'react';
import Image from 'next/image';
import s from './ServicesSection.module.scss';

const ServicesSection = () => {

    const SERVICES_BULLET_POINTS = [
       'Hair Cut',
       'Bath',
       'Shampoo suited to dog\'s coat',
       'Nails cliped',
       'Ears cleaned',
       'Anal glands expressed',
       'Cologne or perfume',
       'Bandana or bow'
    ];

    return (
        <section id="services" className={s.servicesSection}>
            <div className={s.servicesBg} />
            <div className="container">
                <div className={s.flexContainer}>
                    <div className="contentBox">
                        <h1>Services <span style={{color: 'var(--color-primary-dark)'}}>Offered</span></h1>
                        <h3><em>Standard Grooming Service</em></h3>
                        <p>Keep your pet looking and feeling their best! Standard Grooming Service includes the following:</p>
                        <ul className={s.pawPrintUl}>
                            {
                                SERVICES_BULLET_POINTS.map((point, index) => {
                                    return ( <li key={index}>{point}</li>)
                                })
                            }
                        </ul>
                        <div className={s.doggieGraphic}>
                            <Image
                                src='/pup-logo.png'
                                alt='Puppy Grapic'
                                width={126}
                                height={136}
                            />
                        </div>
                    </div>
                    <div className="contentBox">
                        <div style={{textAlign: 'center', padding: '.5rem 0'}}>
                            <Image
                                src='/bone.png'
                                alt="Bone"
                                aria-hidden={true}
                                width={87}
                                height={37}
                            />
                        </div>
                        <p>Every dog is an individual, and that is how I determine the price. Each breed has a base price that is modified based on the condition of the coat, the time between groomings and other factors.</p>
                        <p>If your dog has fleas, there will be an additional fee for a Capstar treatment. This product will kill over 90% live fleas for up to 24 hours. There is a $7.00 charge for small dogs and a $9.00 charge for large dogs.</p>
                    </div>
                </div>
                <div className={s.noticeDanger}>
                    <h3>Please Note:</h3>
                    <p>In the State of Georgia, a dog groomer must be licensed by the Department of Agriculture (Animal Protection Section) as a kennel. This means that we must have a record of your pet’s current vaccinations for Rabies, Distemper, Parvo and Bordetella (Kennel Cough).</p>
                </div>
                <div className={s.newClients}>
                    <h3><span className={s.red}>NEW CLIENTS:</span> Please fill out our <a href="#">Pet Grooming Application Form</a></h3>
                    <p>*You will need Adobe Acrobat Reader to view and print PDF files. It is available, free of charge, from the <a href="https://get.adobe.com/reader/" target="_blank">Adobe Website</a>.</p>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;
