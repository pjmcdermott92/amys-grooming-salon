import React from 'react';
import Image from 'next/image';
import s from './FindUsSection.module.scss';

const FindUsSection = () => {
    return (
        <section id="findus" className={s.findUsSection}>
            <div className={s.location}>
                <Image
                    src="/AmysGroomingSalon-exterior.png"
                    alt="Amy's Grooming Salon"
                    width={800}
                    height={350}
                />
                <div className={s.directions}>
                    <div className={s.getDirections}>
                        <div className={s.directionsLink}>
                            <a href="https://www.google.com/maps/dir//301+Adams+Jenkins+Memorial+Dr,+Canton,+GA+30115/@34.1800775,-84.5065257,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88f56f3c2edf169f:0xf544b03dc26dbcc6!2m2!1d-84.504337!2d34.1800731!3e0" target="_blank">
                                <Image
                                    src="/location-arrow.png"
                                    alt="Get Directions"
                                    width={56}
                                    height={56}

                                />
                            </a>
                        </div>
                        <h4>Get Directions</h4>
                    </div>
                    <div className={s.address}>
                        <address>
                            <p>Amy's Grooming Salon</p>
                            <p>301 Adam Jeinkins Memorial Drive</p>
                            <p>Suite 200</p>
                            <p>Holly Springs, GA 30115</p>
                            <p><a href="tel:7707890495" title="Click to Call">(770) 789-0495</a></p>
                        </address>
                    </div>
                </div>
            </div>
            <div className={s.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.680812756498!2d-84.50652568441522!3d34.180077518429094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f56f3c2edf169f%3A0xf544b03dc26dbcc6!2s301%20Adams%20Jenkins%20Memorial%20Dr%2C%20Canton%2C%20GA%2030115!5e0!3m2!1sen!2sus!4v1621182395519!5m2!1sen!2sus"
            />
            </div>
        </section>
    )
}

export default FindUsSection;
