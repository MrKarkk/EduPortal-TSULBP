import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './LanguageSwitcher.css';


const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    // Обработчики событий для наведения мыши
    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    // Обработчик клика toggle для мобильных устройств
    const handleToggleClick = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    // Список доступных языков
    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'tj', name: "Точики", flag: '🇹🇯' }
    ];

    // Функция для смены языка
    const changeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
    };

    // Получаем текущий язык
    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <Dropdown 
            className="language-switcher"
            show={showDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Dropdown.Toggle 
                variant="outline-light" 
                id="language-dropdown"
                className="d-flex align-items-center border-0"
                onClick={handleToggleClick}
            >
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                <span className="language-flag">{currentLanguage.flag}</span>
                <span className="language-name">{currentLanguage.name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="border-0 shadow-lg" style={{ minWidth: '170px' }}>
                {languages.map((language) => (
                    <Dropdown.Item
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`d-flex align-items-center ${
                            i18n.language === language.code ? 'active' : ''
                        }`}
                    >
                        <span className="language-flag">{language.flag}</span>
                        <span className="language-name">{language.name}</span>
                        {i18n.language === language.code && (
                            <span className="language-check">✓</span>
                        )}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageSwitcher;