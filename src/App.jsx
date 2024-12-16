// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import {Menu} from "./components/Menu/Menu";
import Login from "./components/Login/Login"
import {Registration} from "./components/Registration/Registration";
import {Main} from "./components/Main/Main";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import EditDishForm from "./components/AdminPanel/EditDish/EditDish";

function App() {
    return (
        <Router>
            <div className="main">
                <header>
                    <h1><span className="whiteLight">Burger</span><span className="orangeLight">Hub</span></h1>
                    <nav>
                        <ul className="left-nav">
                            <li><Link to="/">Главная</Link></li>
                        </ul>
                        <ul className="center-nav">
                            <li><Link to="/menu">Меню</Link></li>
                        </ul>
                        <div className="right-nav">
                            <Link to="/login">Авторизация / </Link>
                            <Link to="/registration">Регистрация</Link>
                        </div>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/adminPanel" element={<AdminPanel />} />
                        <Route path="/adminPanel/editDish/:id" element={<EditDishForm />} />
                    </Routes>
                </main>
                <footer>
                    <p> <span className="orangeLight">&copy; Burger Hub</span></p>
                </footer>
            </div>
        </Router>

    );
}

export default App;
