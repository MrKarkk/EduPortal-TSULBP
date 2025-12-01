import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navbar.css';


export default function AppNavbar() {
    // Хук для переводов
    const { t } = useTranslation();
    
    // Состояние для управления видимостью выпадающего меню
    const [showDropdown, setShowDropdown] = useState(false);
    
    // Состояние для отслеживания скролла
    const [isScrolled, setIsScrolled] = useState(false);
    
    const location = useLocation();

    // Эффект для отслеживания скролла
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        // Добавляем обработчик скролла
        window.addEventListener('scroll', handleScroll);
        
        // Проверяем начальное положение
        handleScroll();

        // Очищаем обработчик при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Обработчики событий для наведения мыши
    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    // Обработчик события для ухода мыши
    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    // Обработчик клика toggle для мобильных устройств
    const handleToggleClick = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    // Функция для определения активной ссылки
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Функция для проверки активности факультетов
    const isFacultiesActive = () => {
        return location.pathname.startsWith('/faculties');
    };

    // Функция для получения классов ссылки
    const getLinkClass = (path) => {
        return `nav-link text-uppercase ${isActive(path) ? 'active' : ''}`;
    };


    return (
        <div>
            <Navbar 
                expand="lg" 
                className={`navbar-custom ${isScrolled ? 'navbar-scrolled' : ''} position-fixed w-100`}
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='navbar-brand d-flex align-items-center' style={{color: "#198754"}}>
                            <FontAwesomeIcon icon={faGraduationCap} size='xl'/>
                            <span className='mx-2 text-light lh-1 fw-semibold'>
                                TSULBP
                            </span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='custom-toggler' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto justify-content-end w-100 align-items-center'>
                        <Link 
                            to='/' 
                            className={getLinkClass('/')}
                            >{t('navigation.home')}</Link>

                        <Dropdown 
                            className="faculties-dropdown"
                            show={showDropdown}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Dropdown.Toggle 
                                variant="link" 
                                id="faculties-dropdown"
                                className={`nav-link text-uppercase ${isFacultiesActive() ? 'active' : ''}`}
                                onClick={handleToggleClick}
                            >
                                {t('navigation.faculties')}
                                <FontAwesomeIcon icon={faChevronDown} className="ms-1" size="sm" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="border-0 shadow-lg" style={{ minWidth: '150px' }}>
                                <Dropdown.Item as={Link} to="/faculties" className='py-2'>
                                    <strong>{t('faculties.political')}</strong>
                                    {/* <br />
                                    // <small className='text-muted'>{t('faculties.political')}</small> */}
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/faculties" className='py-2'>
                                    <strong>{t('faculties.finance')}</strong>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/faculties" className='py-2'>
                                    <strong>{t('faculties.business')}</strong>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/faculties" className='py-2'>
                                    <strong>{t('faculties.innovative')}</strong>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/faculties" className='py-2'>
                                    <strong>{t('faculties.joint')}</strong>
                                </Dropdown.Item>
                                {/* <Dropdown.Divider /> */}
                                {/* <Dropdown.Item as={Link} to="/faculties" className='text-success fw-bold'>
                                    {t('faculties.viewAll')}
                                </Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Link 
                            to='/about' 
                            className={getLinkClass('/about')}
                            >{t('navigation.about')}</Link>
                        <Link 
                            to='/blog' 
                            className={getLinkClass('/blog')}
                            >{t('navigation.blog')}</Link>
                        <Link 
                            to='/contact' 
                            className={getLinkClass('/contact')}
                            >{t('navigation.contact')}</Link>
                        
                        {/* Переключатель языков */}
                        <div className="ms-3">
                            <LanguageSwitcher />
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}