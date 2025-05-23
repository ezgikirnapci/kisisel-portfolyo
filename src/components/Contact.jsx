import React from "react";
import "../styles/styles.css"; // CSS dosyasını dahil ediyoruz

const Contact = () => {
    return (
        <section className="section-container" id="contact">
            <div className="contact-container">
                <h2>İletişim</h2>
                <form className="contact-form">
                    <label>Adınız</label>
                    <input type="text" placeholder="Adınızı girin" required />

                    <label>E-posta</label>
                    <input type="email" placeholder="E-posta adresinizi girin" required />

                    <label>Mesaj</label>
                    <textarea placeholder="Mesajınızı yazın" rows="5" required></textarea>

                    <button type="submit">Gönder</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
