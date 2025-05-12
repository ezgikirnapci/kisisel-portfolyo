import React from 'react';

function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Ana Sayfa</h1>
            <p>Portfolyo siteme hoş geldin! Yukarıdaki menüden sayfalarımı inceleyebilirsin.</p>
            {/* Sosyal Medya Bağlantıları */}
            <footer className="home-footer">
                <h3>Sosyal Medya</h3>
                <ul>
                    <li>
                        <a href="https://github.com/kullaniciadiniz" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kullaniciadiniz" target="_blank" rel="noopener noreferrer">
                            X (Twitter)
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Home;
