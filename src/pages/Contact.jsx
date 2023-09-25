import React, { useState } from 'react';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// icons
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        clientType: 'new',
        textarea: ''
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: '',
            email: '',
            phone: '',
            clientType: 'new',
            textarea: ''
        })
    }

    return (
        <AppLayout>
            <BreadCrumb page="contact"/>

            <div className="container contact" data-aos="fade-up" data-aos-duration="700">
                <div className="contactBox">
                    <div className="contactAddress">
                        <div className="contactTitle">
                            <h1>Let's Connect!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor nihil iste porro distinctio. In
                                harum quidem mollitia quas natus aliquam dolore dolores.</p>
                        </div>
                        <div className="contactInfo">
                            <div className="officeAddress">
                                <h3><FaMapMarkedAlt/><strong>Address:</strong></h3>
                                <p>North Tower(3rd floor), Dhaka, Bangladesh</p>
                            </div>

                            <div className="contactMail">
                                <h3><IoMdMail/><strong>Mail:</strong></h3>
                                <p>interiorx@example.com</p>
                            </div>

                            <div className="contactPhone">
                                <h3><FaPhone/><strong>Phone:</strong></h3>
                                <p>+88 01234-567899, +88 01298-765431</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form onSubmit={handleSubmit}>
                            <div className="inputField">
                                <input onChange={handleChange} value={user.name} name="name" type="text" placeholder="Your name" required/>
                            </div>

                            <div className="inputField">
                                <input onChange={handleChange} value={user.email} name="email" type="email" placeholder="Your email" required/>
                            </div>

                            <div className="inputField">
                                <input onChange={handleChange} value={user.phone} name="phone" type="text" placeholder="Phone number" required/>
                            </div>

                            <div className="inputField">
                                <select onChange={handleChange} value={user.clientType} name="clientType" required>
                                    <option value="new">New client</option>
                                    <option value="existing">Existing</option>
                                </select>
                            </div>

                            <div className="textareaField">
                                <textarea onChange={handleChange} value={user.textarea} name="textarea" id="textarea" placeholder="Your message" required></textarea>
                            </div>

                            <div className="buttonField">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Contact;