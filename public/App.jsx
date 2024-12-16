import React from "react";
import "../src/css/styles.css";

function App() {
    return (
        <div>
            <header>
                <h1>Burger Online</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#menu">Меню</a></li>
                        <li><a href="#login">Войти</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Добро пожаловать!</h2>
                    <p>Описание приложения...</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Моё Web-приложение</p>
            </footer>
        </div>
    );
}

export default App;
