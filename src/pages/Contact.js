import React from "react";


function Contact() {
    return (
        <div className="contact-section">
            <h2>İletişim</h2>
            <form className="contact-form">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" placeholder="Adınızı ve soyadınızı girin" required />

                <label htmlFor="email">Mail:</label>
                <input type="email" id="email" name="email" placeholder="E-posta adresinizi girin" required />

                <label htmlFor="message">İçerik:</label>
                <textarea id="message" name="message" rows="5" placeholder="Mesajınızı buraya yazın..." required></textarea>

                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default Contact;
