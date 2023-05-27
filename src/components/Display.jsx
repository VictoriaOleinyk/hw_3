import React from 'react';

import { useSelector } from 'react-redux';



function Display() {
    const { name, age, gender } = useSelector((state) => state);

    return (
        <div>
            <h2>Введенные данные:</h2>
            <p>Имя: {name || ''}</p>
            <p>Возраст: {age || ''}</p>
            <p>Пол: {gender || ''}</p>
        </div>
    );
}

export default Display
