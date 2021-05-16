import React from 'react'
import s from './HeaderBackground.module.scss';

const HeaderBackground = () => {
    return (
        <div className={s.pageHeader}>
            <div className={s.bubbleLg} style={{
                    left: '-15vw',
                    background: 'var(--color-primary-light)'
                }} />
            <div className={s.bubbleLg} style={{
                    left: '-17vw',
                    top: '-17vw',
                    background: 'var(--color-primary-med)'
                }} />
            <div className={s.bubbleLg} style={{
                    left: '-19vw',
                    top: '-19vw',
                    background: 'var(--color-primary-dark)'
                }} />
                <div className={s.bubbleLg} style={{
                    top: '-15vw',
                    right: '-18vw',
                    background: 'var(--color-primary-light)',
                    zIndex: 1
                }} />
            <div className={s.bubbleLg} style={{
                    right: '-20vw',
                    top: '-18vw',
                    background: 'var(--color-primary-med)',
                    zIndex: 1
                }} />
            <div className={s.bubbleLg} style={{
                    right: '-22vw',
                    top: '-20vw',
                    background: 'var(--color-primary-dark)',
                    zIndex: 1
                }} />
            <div className={s.bubbleOutline} />
        </div>
    )
}

export default HeaderBackground;
