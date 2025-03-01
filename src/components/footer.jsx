import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uiMessage, setUiMessage] = useState({ text: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!fullName.trim()) newErrors.fullName = 'Your full name is required';
        if (!email.trim()) newErrors.email = 'Your email is required';
        if (!message.trim()) newErrors.message = 'Your message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setIsSubmitting(true);
            setUiMessage({ text: '', type: '' });

            try {
                await emailjs.send(
                    'csjae21',
                    'template_9o1fxck',
                    {
                        fullName: fullName,
                        email: email,
                        message: message,
                    },
                    'kMbh1OKHuptk80lc2'
                );

                setUiMessage({ text: 'Message sent successfully!', type: 'success' });
                setFullName('');
                setEmail('');
                setMessage('');
                setErrors({});
            } catch (error) {
                console.error('Failed to send message:', error);
                setUiMessage({ text: 'Failed to send message. Please try again later.', type: 'error' });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleInputChange = (e, setter, field) => {
        setter(e.target.value);
        if (e.target.value.trim()) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="footer" id="contact">
            <h2 id="listHeader" className="bioHead">Contact Me</h2>
            <p className="bio_contact">
                Feel free to contact me directly through this form or reach out through{' '}
                <a href="https://www.linkedin.com/in/minjaejang/" target="_blank" className="contact_link">
                    LinkedIn.
                </a>
            </p>
            <form onSubmit={handleSubmit} className="footer-form">
                <div className="form-row">
                    <label>
                        Full Name
                        <input
                            type="text"
                            placeholder="Richard Hendricks"
                            value={fullName}
                            onChange={(e) => handleInputChange(e, setFullName, 'fullName')}
                            className="contact_fields"
                        />
                        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="richard.hendricks@gmail.com"
                            value={email}
                            onChange={(e) => handleInputChange(e, setEmail, 'email')}
                            className="contact_fields"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </label>
                </div>
                <label>
                    <textarea
                        placeholder="Hi Minjae, I just saw your portfolio site. I'd love to have a coffee chat!"
                        value={message}
                        onChange={(e) => handleInputChange(e, setMessage, 'message')}
                        className="contact-msg"
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </label>
                <button type="submit" disabled={!fullName || !email || !message || isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </form>

            {uiMessage.text && (
                <div
                    className={`ui-message ${uiMessage.type === 'success' ? 'success' : 'error'}`}
                    style={{
                        marginTop: '1rem',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        backgroundColor: uiMessage.type === 'success' ? '#60aefceb' : '#ff6b6b',
                        color: '#fff',
                        textAlign: 'center',
                    }}
                >
                    {uiMessage.text}
                </div>
            )}
        </div>
    );
};

export default Footer;