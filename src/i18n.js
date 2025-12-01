import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// import { useTranslation } from 'react-i18next';

// const { t, i18n } = useTranslation();

// // Получение перевода
// t('navigation.home')       // "Home" / "Главная" / "Bosh sahifa"

// // Смена языка
// i18n.changeLanguage('ru');


i18n
    // Загрузка переводов через HTTP из папки /public/locales
    .use(Backend)
    // Автоматическое определение языка пользователя
    .use(LanguageDetector)
    // Подключение к react-i18next
    .use(initReactI18next)
    // Инициализация i18next
    .init({
        // Язык по умолчанию, если не удалось определить язык пользователя
        fallbackLng: 'ru',
        
        // Поддерживаемые языки
        supportedLngs: ['en', 'ru', 'tj'],
        
        // Отладка (только в development)
        debug: import.meta.env.DEV,

        // Настройки детектора языка
        detection: {
            // Порядок проверки источников языка
            order: ['localStorage', 'navigator', 'htmlTag'],
            
            // Кэшировать выбранный язык в localStorage
            caches: ['localStorage'],
            
            // Ключ для сохранения в localStorage
            lookupLocalStorage: 'i18nextLng',
        },

        // Настройки Backend для загрузки файлов переводов
        backend: {
            // Путь к файлам переводов
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // Настройки интерполяции
        interpolation: {
            // React уже экранирует значения по умолчанию
            escapeValue: false,
        },

        // Настройки для React
        react: {
            // Использовать Suspense для ленивой загрузки переводов
            useSuspense: false,
        }
    });

export default i18n;