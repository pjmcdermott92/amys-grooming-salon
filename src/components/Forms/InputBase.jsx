import React from 'react';
import s from './Forms.module.scss';

const InputBase = ({ name, className, label, type, value, error, options, onChange } = props) => {
    if (type !== 'radio' && type !== 'textarea') return (
        <div className={s.formGroup}>
            <label className={s.inputLabel} htmlFor={name} data-error={error ? error : null}>{label}</label>
            <input className={className} type={type} name={name} id={name} value={value} onChange={onChange} />
        </div>
    )
    if (type === 'radio') return (
        <div className={s.formGroup}>
            <span className={s.inputLabel} data-error={error ? error : null}>{label}</span>
            {
                options.map((option, index) => {
                    const { id, display, checked } = option;
                    return (
                        <label key={index} htmlFor={id} className={s.radioLabel}>
                            <input type="radio" id={id} name={name} value={id} checked={checked} onChange={onChange} />
                            {display}
                        </label>
                    )
                })
            }
        </div>
    )
    if (type === 'textarea') return (
        <div className={s.formGroup}>
            <label className={s.inputLabel} htmlFor={name} data-error={error ? error : null}>{label}:</label>
            <textarea name={name} id={name} value={value} onChange={onChange} />
        </div>
    )
    return null;
}

export default InputBase
