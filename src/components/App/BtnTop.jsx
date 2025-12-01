import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function BtnTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Показывать кнопку при прокрутке вниз
    useEffect(() => {
        const toggleVisibility = () => {
            // Определяет, когда показать кнопку. больше 300 пикселей -> показываем кнопку
            if (window.pageYOffset > 300) { 
                setIsVisible(true); // Показывает 
            } else {
                setIsVisible(false); // Скрывает
            }
        };

        // Следит за прокруткой 
        window.addEventListener('scroll', toggleVisibility);
        // Убирает слушатель при удалении
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Функция для плавной прокрутки вверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <div 
                    className="btn-top position-fixed"
                    style={{
                        bottom: '30px',
                        right: '30px',
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                    onClick={scrollToTop}
                >
                    <div 
                        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                        style={{
                            width: '50px',
                            height: '50px',
                            transition: 'all 0.3s ease',
                            opacity: '0.9'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = '0.9';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                    </div>
                </div>
            )}
        </>
    );
}

export default BtnTop;