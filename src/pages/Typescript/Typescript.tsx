import React from "react";
import '../Typescript/Typescript.css'

const username

export const Typescript=()=> {
    return(
        <>
        <div id="root">
    <div className="form_container">
            <h2>Регистрация</h2>
            <form action="#">
                <label htmlFor="">
                    Введите ваше имя
                    <input type="text" placeholder="Ваше Имя" />
                </label>
                <label htmlFor="">
                    Введите вашу фамилию
                    <input type="text" placeholder="Вашу фамилию" />
                </label>
                <label htmlFor="">
                    Введите ваш номер телефона
                    <input type="tel" placeholder="+998(94) 637-56-54" />
                </label>
            </form>
            <button type="submit">Зарегестрироваться</button>
            </div>
        </div>
        </>
    )
}