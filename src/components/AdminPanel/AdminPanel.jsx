import React, { useEffect, useState  } from "react";
import AddDishForm from './ AddDishForm/AddDishForm';
import "./AdminPanel.css";
import MenuEdit from "./ MenuEdit/MenuEdit";

export const AdminPanel = () => {
    useEffect(() => {
        document.body.classList.add("admin-panel-page");

        return () => {
            document.body.classList.remove("admin-panel-page");
        };
    }, []);

    const [activeContent, setActiveContent] = useState('Home');

    const handleClick = (content) => {
        if (content === 'Menu') {
            setActiveContent('Menu');
        } else {
            setActiveContent(content);
        }
    };


    const handleDishSubmit = (dishData) => {
        console.log('Данные блюда:', dishData);
    };

    const renderAddDish = () => (
        <AddDishForm onSubmit={handleDishSubmit} />
    );

    const renderAddCombo = () => (
        <div>
            <h2>Форма добавления комбо</h2>
            <p>Здесь будет форма для добавления комбо.</p>
        </div>
    );

    const renderEditMenu = () => (
        <MenuEdit onSubmit={handleDishSubmit} />
    );

    const renderViewOrders = () => (
        <div>
            <h2>Просмотр заказов</h2>
            <p>Здесь будет информация о заказах.</p>
        </div>
    );

    const renderContent = () => {
        switch (activeContent) {
            case 'Добавить блюдо':
                return renderAddDish();
            case 'Добавить комбо':
                return renderAddCombo();
            case 'Редактировать меню':
                return renderEditMenu();
            case 'Просмотр заказов':
                return renderViewOrders();
            default:
                return null;
        }
    };

    return (
        <div className="layout">
            <aside className="sidebar">
                <h1>Меню</h1>
                <ul>
                    <li onClick={() => handleClick('Добавить блюдо')}>Добавить блюдо</li>
                    <li onClick={() => handleClick('Добавить комбо')}>Добавить комбо</li>
                    <li onClick={() => handleClick('Редактировать меню')}>Редактировать меню</li>
                </ul>
                <h1 className='orangeLight'>Заказы</h1>
                <ul>
                    <li onClick={() => handleClick('Просмотр заказов')}>Просмотр заказов</li>
                </ul>
                <h1 className='orangeLight'>Экспорт</h1>
                <ul>
                    <li onClick={() => handleClick('Просмотр заказов')}>Экспорт в CSV</li>
                    <li onClick={() => handleClick('Просмотр заказов')}>Просмотр XML</li>
                </ul>
            </aside>
            <div className="content">
            {renderContent()}
            </div>
        </div>
    );
};

export default AdminPanel;