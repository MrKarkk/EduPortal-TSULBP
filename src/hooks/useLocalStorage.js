import { useState } from "react";

/**
 * Кастомный хук для работы с localStorage
 * Позволяет сохранять и получать данные из localStorage с автоматической синхронизацией
 * 
 * @param {string} key - Ключ для сохранения в localStorage
 * @param {any} initialValue - Начальное значение, если данных в localStorage нет
 * @returns {Array} Массив из двух элементов: [storedValue, setValue]
 */
const useLocalStorage = (key, initialValue) => {
    // Функция для получения значения из localStorage
    const getStoredValue = () => {
        try {
            // Получаем данные из localStorage по ключу
            const item = window.localStorage.getItem(key);
            
            // Если данные есть, парсим JSON и возвращаем
            if (item) {
                return JSON.parse(item);
            } else {
                // Если данных нет, сохраняем начальное значение и возвращаем его
                window.localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            // В случае ошибки (например, localStorage недоступен) возвращаем начальное значение
            console.error(`Ошибка при чтении из localStorage с ключом "${key}":`, error);
            return initialValue;
        }
    };

    // Создаем состояние с начальным значением из localStorage
    const [storedValue, setStoredValue] = useState(getStoredValue);

    /**
     * Функция для обновления значения в состоянии и localStorage
     * @param {any} value - Новое значение для сохранения
     */
    const setValue = (value) => {
        try {
            // Определяем какое значение сохранять
            // Если передана функция, вызываем её с текущим значением
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            
            // Обновляем состояние
            setStoredValue(valueToStore);
            
            // Сохраняем в localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // Логируем ошибку, если не удалось сохранить в localStorage
            console.error(`Ошибка при сохранении в localStorage с ключом "${key}":`, error);
        }
    };

    // Возвращаем текущее значение и функцию для его обновления
    return [storedValue, setValue];
};

export default useLocalStorage;