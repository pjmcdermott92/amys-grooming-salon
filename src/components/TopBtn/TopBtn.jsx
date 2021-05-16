import React, { useState, useEffect } from 'react'
import s from './TopBtn.module.scss';

const TopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    const toggleShowBtn = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) setShowBtn(true);
        if (scrolled <= 300) setShowBtn(false);
    } 

    const scrollTop = () => window.scrollTo({ top: 0 });

    useEffect(() => {
        window.addEventListener('scroll', toggleShowBtn); 
    })

    if (showBtn) return (
        <div className={s.toTopBtn} title="Back to Top" onClick={scrollTop}>
            &#9650;
        </div>
    )
    else return null;
}

export default TopBtn
