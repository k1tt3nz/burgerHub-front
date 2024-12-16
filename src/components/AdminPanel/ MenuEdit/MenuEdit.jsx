import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./MenuEdit.css";


const MenuEdit = () => {
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState(null);
    const [clickedRow, setClickedRow] = useState(null);

    // Загружаем данные с сервера (например, через fetch)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://backend:8228/api/v1/dish/");
            const data = await response.json();
            setMenuData(data);
        };

        fetchData();
    }, []);

    const renderTable = (category, data) => {
        return (
            <div key={category}>
                <h3>{category}</h3>
                <table className="menu-table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Состав</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((dish) => (
                        <tr
                            key={dish.id}
                            onClick={() => handleRowClick(dish.id)}
                            onDoubleClick={() => handleRowDoubleClick(dish.id)}
                            className={clickedRow === dish.id ? "clicked" : ""}
                        >
                            <td>{dish.name}</td>
                            <td>{dish.description}</td>
                            <td>{dish.price}</td>
                            <td>{dish.composition.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const handleRowClick = (id) => {
        setClickedRow(id); // Устанавливаем ID выбранной строки
    };

    const handleRowDoubleClick = (id) => {
        navigate(`/adminPanel/editDish/${id}`);
    };

    if (!menuData) return <div>Загрузка...</div>;

    return (
        <div className="menu-edit-container">
            {/* Выводим таблицы для каждой категории */}
            {renderTable("Бургеры", menuData.burgers)}
            {renderTable("Пицца", menuData.pizza)}
            {renderTable("Салаты", menuData.salads)}
        </div>
    );
};

export default MenuEdit;
