import React from "react";
import "../styles/styles.css";

const Home = () => {
    return (
        <section className="section-container" id="home" style={{
            backgroundImage: "url('/images/son.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "black",
            textAlign: "center",
            textShadow: "2px 2px 10px black",
            padding: "0 20px"
        }}>

            <div className="overlay-content">

                <h1 className="fade-in">Merhaba, ben Ezgi!</h1>
                <p className="fade-in">Kişisel portfolyo sayfama hoş geldiniz.</p>
            </div>
        </section>

    );
}

export default Home;
