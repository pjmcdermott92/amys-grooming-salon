import React from 'react';
import HeaderBackground from './HeaderBackground/HeaderBackground';

const Layout = ({ children }) => {

    const displayYear = () => new Date().getFullYear();

    return (
        <div className="pageWrapper">
            <div className="contentWrapper">
                <HeaderBackground />
                {children}
                <footer className="pageFooter">
                    <p>Copyright &copy;{displayYear()} Amy's Grooming Salon. All rights reserved.</p>
                    <p>Page designed and built by <a href="http://www.pjmcdermott.com/" target="_blank" rel="noreferrer">Patrick J. McDermott</a>.</p>
                </footer>
            </div>
        </div>
    )
}

export default Layout
