import React from "react";
import "../styles/styles.css";

const Home = () => {
    return (
        <section className="home-section"
                 style={{
                     backgroundImage: "url('/images/indir.jpg')",
                     backgroundSize: "%100 auto",

                     backgroundPosition: "center center",
                     height: "100vh",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     color: "white",
                     textShadow: "2px 2px 10px black",
                 }}>

                    <h1>Merhaba, ben Ezgi !</h1>
                    <p>Kişisel portfolyo sayfama hoş geldiniz.</p>

        </section>
    );
}

export default Home;
