import React, { useState } from 'react';
import './AddDishForm.css'; // Подключаем стили

const AddDishForm = ({ onSubmit }) => {
    const [dishData, setDishData] = useState({
        name: '',
        type: 'burger',
        price: '',
        description: '',
        composition: {
            protein: '',
            fats: '',
            carbohydrate: '',
            calories: '',
            compositionDescription: '',
            allergens: ''
        },
        imageUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in dishData) {
            setDishData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else {
            setDishData((prevState) => ({
                ...prevState,
                composition: {
                    ...prevState.composition,
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            name: dishData.name,
            type: dishData.type,
            price: dishData.price,
            description: dishData.description,
            composition: {
                protein: dishData.composition.protein,
                fats: dishData.composition.fats,
                carbohydrate: dishData.composition.carbohydrate,
                calories: dishData.composition.calories,
                description: dishData.composition.compositionDescription,
                allergens: dishData.composition.allergens
            },
            imageUrl: dishData.imageUrl,
        };

        try {
            const response = await fetch('http://backend:8228/api/v1/admin/menu/dish/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const responseData = await response.json();
            console.log('Данные успешно отправлены', responseData);
            alert('Блюдо успешно добавлено');
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при добавлении блюда');
        }
    };

    return (
        <div className="content-container">
            <header className="content-header">
                <h1>Добавить новое блюдо</h1>
            </header>

            <form onSubmit={handleSubmit} className="dish-form">
                <h3>Блюдо:</h3>
                <div>
                    <label htmlFor="name">Название:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={dishData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Тип:</label>
                    <select
                        id="type"
                        name="type"
                        value={dishData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="burger">Бургер</option>
                        <option value="pizza">Пицца</option>
                        <option value="salad">Салат</option>
                        <option value="drink">Напиток</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Цена:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={dishData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Описание блюда:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={dishData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Фото (URL):</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={dishData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h3>Состав блюда:</h3>
                <div>
                    <label htmlFor="proteins">Белки:</label>
                    <input
                        type="number"
                        id="proteins"
                        name="protein"
                        value={dishData.composition.protein}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fats">Жиры:</label>
                    <input
                        type="number"
                        id="fats"
                        name="fats"
                        value={dishData.composition.fats}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carbohydrates">Углеводы:</label>
                    <input
                        type="number"
                        id="carbohydrates"
                        name="carbohydrate"
                        value={dishData.composition.carbohydrate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="calories">Каллории:</label>
                    <input
                        type="number"
                        id="calories"
                        name="calories"
                        value={dishData.composition.calories}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="compositionDescription">Описание состава:</label>
                    <input
                        type="text"
                        id="compositionDescription"
                        name="compositionDescription"
                        value={dishData.composition.compositionDescription}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="allergens">Алергены:</label>
                    <input
                        type="text"
                        id="allergens"
                        name="allergens"
                        value={dishData.composition.allergens}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default AddDishForm;
