import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import s from './Navbar.module.scss';

const MOBILE_MENU_BREAKPOINT = 750;

const Navbar = () => {

    const [ viewWidth, setViewWidth ] = useState('')
    const [ mobileOpen, setMobileOpen ] = useState(false);

    useEffect(() => {
        setViewWidth(window.innerWidth)
        const onScroll = () => setViewWidth(window.innerWidth);
        window.addEventListener("resize", onScroll);
        const unMount = () => window.removeEventListener("scroll", onScroll);
        return unMount;
    });

    const LINKS = [
        { name: 'About', url: '#about' },
        { name: 'Services', url: '#services' },
        { name: 'Testimonials', url: '#testimonials' },
        { name: 'Find Us', url: '#findus' },
        { name: 'Contact', url: '#contact' },
    ];

    const renderLinks = () => {
        return LINKS.map((link, index) => {
            const { name, url } = link;
            return (
                <li key={index} className={s.navLink} onClick={handleToggleMenu}>
                    <a href={url}>{name}</a>
                </li>
            )
        })
    }

    const handleToggleMenu = () => setMobileOpen(!mobileOpen);

    const mobileNav = (
        <ul className={mobileOpen ? s.mobileOpen : s.mobileClosed}>
            {renderLinks()}
        </ul>
    );

    const navLinks = (
        <ul className={s.navLinks}>
            {renderLinks()}
        </ul>
    );
    
    const toggleMenuButton = () => {
        if (viewWidth < MOBILE_MENU_BREAKPOINT) {
            return (
                <div className={mobileOpen ? s.mobileToggleBtnOpen : s.mobileToggleBtn}
                    onClick={handleToggleMenu}
                >
                    <span className={s.bars} />
                </div>
            )
        }
        return null;
    }

    return (
        <div className={s.navbar}>
            <div className={s.brandLogo}>
                <Image
                    width={113}
                    height={58}
                    src="/amys-bone.png"
                    alt="Amy's Grooming Salon"
                />
            </div>
            {toggleMenuButton()}
            { viewWidth < MOBILE_MENU_BREAKPOINT ? mobileNav : navLinks }
        </div>
    )
}

export default Navbar;
