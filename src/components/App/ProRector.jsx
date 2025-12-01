import { useTranslation } from 'react-i18next';
import { Col, Card } from 'react-bootstrap';
import { faPhoneAlt, faBriefcase, faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rector.css';

function ProRector() {
    const { t } = useTranslation();

    return (
        <>
            {/* Заголовок секции */}
            <div className="mb-5 text-center">
                <h2 className="section-title">{t('proRector.title')}</h2>
                <p className="section-subtitle">{t('proRector.subtitle')}</p>
            </div>

            <section className="rector-section py-5">
                <div className="container">
                    {/* Основной контент о ректоре */}
                    <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                        <div className="rector-image-container w-50">
                            <img 
                                src="/public/images/prorector1.png" 
                                alt={t('rector.name')} 
                                className="img-fluid rounded history-image"
                            />
                        </div>
                        <div className="rector-info">
                            <h3 className="rector-name">{t('proRector.proRector1.name')}</h3>
                            <p className="rector-position">{t('proRector.proRector1.position')}</p>
                            <div className="rector-details">
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="detail-icon text-primary" />
                                        <span><strong>Контакты:</strong> (+992) 934444471 / (+992) 3422 23594</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faGraduationCap} className="detail-icon text-success" />
                                        <span><strong>Кандидатская диссертация:</strong> «Антропонимы в “Шахнаме” Абулькасима Фирдоуси»</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="detail-icon text-warning" />
                                        <span><strong>Опыт работы:</strong> С 2010 года — Институт экономики и торговли; с 2017 года — ТГУПБП</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faMedal} className="detail-icon text-danger" />
                                        <span><strong>Учёное звание:</strong> доцент (2025)</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Биография и карьера */}
                    <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <Card className="bio-card h-100">
                                <Card.Body>
                                    <h4 className="bio-title">{t('rector.biography')}</h4>
                                    <p className="bio-text">{t('proRector.proRector1.birthInfo')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="vision-card h-100">
                                <Card.Body>
                                    <h4 className="vision-title">{t('rector.vision')}</h4>
                                    <p className="vision-text">{t('proRector.proRector1.appointmentDate')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    
                </div>
            </section>
            <section className="rector-section py-5">
                <div className="container">
                    {/* Основной контент о ректоре */}
                    <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                        <div className="rector-image-container w-50">
                            <img 
                                src="/public/images/prorector2.png" 
                                alt={t('rector.name')} 
                                className="img-fluid rounded history-image"
                            />
                        </div>
                        <div className="rector-info">
                            <h3 className="rector-name">{t('proRector.proRector2.name')}</h3>
                            <p className="rector-position">{t('proRector.proRector2.position')}.</p>
                            <div className="rector-details">
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="detail-icon text-primary" />
                                        <span><strong>Контакты:</strong> (+992) 934444471 / (+992) 3422 23594</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faGraduationCap} className="detail-icon text-success" />
                                        <span><strong>Кандидатская диссертация:</strong>«Из истории Вахшской ирригационной системы» (1998), «Аграрные преобразования в Таджикистане в 20-е годы XX века» (2011)</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="detail-icon text-warning" />
                                        <span><strong>Опыт работы:</strong> С 2010 года — Институт экономики и торговли; с 2017 года — ТГУПБП</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faMedal} className="detail-icon text-danger" />
                                        <span><strong>Учёное звание:</strong> доцент (2025)</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Биография и карьера */}
                    <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <Card className="bio-card h-100">
                                <Card.Body>
                                    <h4 className="bio-title">{t('rector.biography')}</h4>
                                    <p className="bio-text">{t('proRector.proRector2.birthInfo')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="vision-card h-100">
                                <Card.Body>
                                    <h4 className="vision-title">{t('rector.vision')}</h4>
                                    <p className="vision-text">{t('proRector.proRector2.appointmentDate')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    
                </div>
            </section>
            <section className="rector-section py-5">
                <div className="container">
                    {/* Основной контент о ректоре */}
                    <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                        <div className="rector-image-container w-50">
                            <img 
                                src="/public/images/prorector3.png" 
                                alt={t('rector.name')} 
                                className="img-fluid rounded history-image"
                            />
                        </div>
                        <div className="rector-info">
                            <h3 className="rector-name">{t('proRector.proRector3.name')}</h3>
                            <p className="rector-position">{t('proRector.proRector3.position')}.</p>
                            <div className="rector-details">
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="detail-icon text-primary" />
                                        <span><strong>Контакты:</strong> t_rizokulov@mail.ru, (+992) 927777735.</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faGraduationCap} className="detail-icon text-success" />
                                        <span><strong>Кандидатская диссертация:</strong>«Из истории Вахшской ирригационной системы» (1998), «Аграрные преобразования в Таджикистане в 20-е годы XX века» (2011)</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="detail-icon text-warning" />
                                        <span><strong>Опыт работы:</strong> С 2010 года — Институт экономики и торговли; с 2017 года — ТГУПБП</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faMedal} className="detail-icon text-danger" />
                                        <span><strong>Учёное звание:</strong> доцент (2025)</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Биография и карьера */}
                    <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <Card className="bio-card h-100">
                                <Card.Body>
                                    <h4 className="bio-title">{t('rector.biography')}</h4>
                                    <p className="bio-text">{t('proRector.proRector3.birthInfo')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="vision-card h-100">
                                <Card.Body>
                                    <h4 className="vision-title">{t('rector.vision')}</h4>
                                    <p className="vision-text">{t('proRector.proRector3.appointmentDate')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </section>            
            <section className="rector-section py-5">
                <div className="container">
                    {/* Основной контент о ректоре */}
                    <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                        <div className="rector-image-container w-50">
                            <img 
                                src="/public/images/prorector4.png" 
                                alt={t('rector.name')} 
                                className="img-fluid rounded history-image"
                            />
                        </div>
                        <div className="rector-info">
                            <h3 className="rector-name">{t('proRector.proRector4.name')}</h3>
                            <p className="rector-position">{t('proRector.proRector4.position')}.</p>
                            <div className="rector-details">
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="detail-icon text-primary" />
                                        <span><strong>Контакты:</strong>(83422) 2-38-95, 92-770-41-52.</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faGraduationCap} className="detail-icon text-success" />
                                        <span><strong>Кандидатская диссертация:</strong>«Из истории Вахшской ирригационной системы» (1998), «Аграрные преобразования в Таджикистане в 20-е годы XX века» (2011)</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="detail-icon text-warning" />
                                        <span><strong>Опыт работы:</strong> С 2010 года — Институт экономики и торговли; с 2017 года — ТГУПБП</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faMedal} className="detail-icon text-danger" />
                                        <span><strong>Учёное звание:</strong> доцент (2025)</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Биография и карьера */}
                    <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <Card className="bio-card h-100">
                                <Card.Body>
                                    <h4 className="bio-title">{t('rector.biography')}</h4>
                                    <p className="bio-text">{t('proRector.proRector4.birthInfo')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="vision-card h-100">
                                <Card.Body>
                                    <h4 className="vision-title">{t('rector.vision')}</h4>
                                    <p className="vision-text">{t('proRector.proRector4.appointmentDate')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </section>
            <section className="rector-section py-5">
                <div className="container">
                    {/* Основной контент о ректоре */}
                    <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                        <div className="rector-image-container w-50">
                            <img 
                                src="/public/images/prorector5.png" 
                                alt={t('rector.name')} 
                                className="img-fluid rounded history-image"
                            />
                        </div>
                        <div className="rector-info">
                            <h3 className="rector-name">{t('proRector.proRector5.name')}</h3>
                            <p className="rector-position">{t('proRector.proRector5.position')}.</p>
                            <div className="rector-details">
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="detail-icon text-primary" />
                                        <span><strong>Контакты:</strong>(83422) 2-38-95, 92-770-41-52.</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faGraduationCap} className="detail-icon text-success" />
                                        <span><strong>Кандидатская диссертация:</strong>«Из истории Вахшской ирригационной системы» (1998), «Аграрные преобразования в Таджикистане в 20-е годы XX века» (2011)</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faBriefcase} className="detail-icon text-warning" />
                                        <span><strong>Опыт работы:</strong> С 2010 года — Институт экономики и торговли; с 2017 года — ТГУПБП</span>
                                    </div>
                                    <div className="detail-item">
                                        <FontAwesomeIcon icon={faMedal} className="detail-icon text-danger" />
                                        <span><strong>Учёное звание:</strong> доцент (2025)</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Биография и карьера */}
                    <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <Card className="bio-card h-100">
                                <Card.Body>
                                    <h4 className="bio-title">{t('rector.biography')}</h4>
                                    <p className="bio-text">{t('proRector.proRector5.birthInfo')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card className="vision-card h-100">
                                <Card.Body>
                                    <h4 className="vision-title">{t('rector.vision')}</h4>
                                    <p className="vision-text">{t('proRector.proRector5.appointmentDate')}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProRector;