// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import the CSS for styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <table className="contact-form-table">
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type="email" name="email" value={formData.email} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label>Message:</label></td>
                            <td><textarea name="message" value={formData.message} onChange={handleChange} required></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button type="submit">Send Message</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default ContactForm;
