// src/Content.jsx
import React, {useEffect, useState} from 'react';
import "./Menu.css"
import "./Card.css"

const Card = ({dish}) => {
    return (
        <div className="card">
            <img className="card-image" src={dish.imageUrl} alt={dish.name}/>
            <div className="card-content">
                <h2 className="card-title">{dish.name}</h2>
                <p className="card-price">{dish.price} руб.</p>
            </div>
        </div>
    );
}

const MenuCards = () => {
    const [menu, setMenu] = useState({
        burgers: [],
        pizza: [],
        salads: []
    });

    useEffect(() => {
        fetch('http://localhost:8228/api/v1/dish/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMenu(data))
            .catch(error => {
                console.error('Fetch error: ', error);
            });
    }, []);

    return menu;
};

export function Menu() {
    const menu = MenuCards();
    return (
        <div className="menu-container">
            <div>
                <h1 className={`orangeLight title`}>Бургеры</h1>
                <div className="card-container">
                    {menu.burgers.map((burger) => (
                        <Card key={burger.id} dish={burger}/>
                    ))}
                </div>

                <h1 className={`orangeLight title`}>Пицца</h1>
                <div className="card-container">
                    {menu.pizza.map((pizza) => (
                        <Card key={pizza.id} dish={pizza}/>
                    ))}
                </div>

                <h1 className={`orangeLight title`}>Салаты</h1>
                <div className="card-container">
                    {menu.salads.map((salad) => (
                        <Card key={salad.id} dish={salad}/>
                    ))}
                </div>
            </div>
        </div>
    );
}