import React from 'react';
import "./Auth.css"

function Login() {
    return (
        <div className="auth-container">
            <div className="form-group">
                <div className="form_auth_block_content">
                    <p className="form_auth_block_head_text">Авторизация</p>
                    <form className="form_auth_style" action="#" method="post">
                        <div className="form_auth_style_block">
                            <label>Телефон</label>
                            <input type="phone" name="auth_phone" className="input-auth"
                                   placeholder="Введите номер телефона" required/>
                        </div>
                        <div className="form_auth_style_block">
                            <label>Пароль</label>
                            <input type="password" name="auth_pass" className="input-auth" placeholder="Введите пароль"
                                   required/>
                        </div>
                        <button className="form_auth_button" type="submit" name="form_auth_submit">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;