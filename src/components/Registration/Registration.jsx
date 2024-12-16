import React from 'react';
import "../Login/Auth.css"

export function Registration() {
    return (
        <div className="auth-container">
            <div className="form-group">
                <div className="form_auth_block_content">
                    <p className="form_auth_block_head_text">Регистрация</p>
                    <form className="form_auth_style" action="#" method="post">
                        <div className="form_auth_style_block">
                            <label>Имя</label>
                            <input type="name" name="auth_name" className="input-auth" placeholder="Введите имя"
                                   required/>
                        </div>
                        <div className="form_auth_style_block">
                            <label>Телефон</label>
                            <input type="phone" name="auth_phone" className="input-auth" placeholder="Введите телефон"
                                   required/>
                        </div>
                        <div className="form_auth_style_block">
                            <label>Пароль</label>
                            <input type="password" name="auth_pass" className="input-auth" placeholder="Введите пароль"
                                   required/>
                        </div>
                        <div className="form_auth_style_block">
                            <label>Подтвердите пароль</label>
                            <input type="password" name="auth_pass" className="input-auth"
                                   placeholder="Подтвердите пароль" required/>
                        </div>
                        <button className="form_auth_button" type="submit" name="form_auth_submit">Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}