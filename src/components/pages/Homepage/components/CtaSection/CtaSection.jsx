import React from 'react';
import Button from '../Button/Button';

const CtaStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0 0',
    padding: '1rem',
    backgroundColor: 'var(--color-primary-dark)',
    color: 'var(--color-white)',
    fontStyle: 'italic'
}

const CtaSection = () => {
    return (
        <div style={CtaStyles}>
            <h2 style={{paddingRight: '2rem', fontFamily: 'var(--font-stack-primary)'}}>Get Your Pet Looking - And Feeling - Cleaner Today!</h2>
            <Button value="Make an Appointment" color="light" />
        </div>
    )
}

export default CtaSection;