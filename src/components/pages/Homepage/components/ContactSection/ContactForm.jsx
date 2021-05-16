import React, { useState } from 'react';
import InputBase from '../../../../Forms/InputBase';

const ContactForm = () => {

    const INIT_ERR = null;


    //Form Submitted
    const [formSent, setFormSent] = useState(false);

    // Input Values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contact, setContact] = useState('');
    const [prevClient, setPrevClient] = useState('');
    const [reference, setRefernce] = useState('');
    const [comments, setComments] = useState('');

    // Input Validations
    const [nameErr, setNameErr] = useState(INIT_ERR);
    const [emailErr, setEmailErr] = useState(INIT_ERR);
    const [phoneErr, setPhoneErr] = useState(INIT_ERR);
    const [contactErr, setContactErr] = useState(INIT_ERR);
    const [prevClientErr, setPrevClientErr] = useState(INIT_ERR);

    const handleSubmit = e => {
        e.preventDefault();
        validateInputs();
        if (isErrors()) return;
        sendForm();
    }

    const sendForm = () => {
        setFormSent(true);
        sendData();
        resetForm();
    }

    const sendData = async () => {
        const formURL = process.env.FORM_URL;
        const inputData = {
            name, email, phone, contact, prevClient, reference, comments
        };
        if (!formURL) return;
        fetch(formURL, {
            method: 'post',
            body: JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data = res);
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setContact('');
        setPrevClient('');
        setRefernce('');
        setComments('');
    }

    const restErrors = () => {
        setNameErr(INIT_ERR);
        setEmailErr(INIT_ERR);
        setPhoneErr(INIT_ERR);
        setContactErr(INIT_ERR);
        setPrevClientErr(INIT_ERR);
    }

    const validateInputs = () => {
        restErrors();
        if (!name) setNameErr('Please enter your name');
        if (!email) setEmailErr('Please enter your email address');
        if (phone.length < 10) setPhoneErr('Please enter a valid phone number');
        if (!phone) setPhoneErr('Please enter your phone number');
        if (!contact) setContactErr('Please select a contact method');
        if (!prevClient) setPrevClientErr('Please choose an option');
        isErrors();
    }

    const isErrors = () => {
        if (!name || !email || !contact || !prevClient || phone.length < 10) {
            return true;
        }
        return false;
    }

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'contact') setContact(value);
        if (name === 'prevClient') setPrevClient(value);
        if (name === 'reference') setRefernce(value);
        if (name === 'comments') setComments(value);
    }

    const FORM_INPUTS = [
        { name: 'name', label: 'Full Name', type: 'text', value: name, error: nameErr },
        { name: 'email', label: 'Email Address', type: 'email', value: email, error: emailErr },
        { name: 'phone', label: 'Phone Number', type: 'number', value: phone, error: phoneErr },
        {
            name: 'contact',
            label: 'Preferred Contact Method:',
            type: 'radio',
            value: contact,
            options: [
                {id: 'e-mail', display: 'Email', checked: contact === 'e-mail'},
                {id: 'call', display: 'Phone', checked: contact === 'call'},
                {id: 'text', display: 'Text', checked: contact === 'text'},
            ],
            error: contactErr },
        {
            name: 'prevClient',
            label: 'Has your pet ever had services done at Amy’s Grooming Salon before?',
            type: 'radio',
            value: prevClient,
            options: [
                {id: 'yes', display: 'Yes'},
                {id: 'no', display: 'No'},
            ],
            error: prevClientErr },
            { name: 'reference', label: 'How did you hear about us?', type: 'text', value: reference, error: null },
            { name: 'comments', label: 'Comments', type: 'textarea', value: comments, error: null },
    ]

    if (!formSent) return (
        <form onSubmit={handleSubmit}>
            {
                FORM_INPUTS.map((input, index) => {
                    const { name, label, type, value, error, options } = input;
                    return (
                        <InputBase
                            key={index}
                            name={name}
                            label={label}
                            type={type}
                            value={value}
                            error={error}
                            options={options}
                            onChange={handleChange}
                        />
                    )
                })
            }
            <InputBase type="submit" className="btn btn-primary" />
        </form>
    )

    return (
        <div
            style={{
                margin: '2rem 0',
                padding: '2rem',
                backgroundColor: 'var(--color-success)'
            }}
        >
            <h2>Thank you!</h2>
            <p>Your information has been sent. We will get back to you as soon as possible!</p>
        </div>
    )
}

export default ContactForm
