import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGraduationCap, 
    faUserTie, 
    faCalendarAlt, 
    faAward,
    faBook,
    faUniversity
} from '@fortawesome/free-solid-svg-icons';
import './Rector.css';

function Rector() {
    const { t } = useTranslation();

    const achievements = [
        {
            icon: faGraduationCap,
            key: "education"
        },
        {
            icon: faBook,
            key: "dissertation"
        },
        {
            icon: faUserTie,
            key: "career"
        },
        {
            icon: faAward,
            key: "awards"
        }
    ];

    return (
        <section className="rector-section py-5">
            <div className="container">
                {/* Заголовок секции */}
                <div className="mb-5 text-center">
                    <h2 className="section-title">{t('rector.title')}</h2>
                    <p className="section-subtitle">{t('rector.subtitle')}</p>
                </div>

                {/* Основной контент о ректоре */}
                <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                    <div className="rector-image-container w-50">
                        <img 
                            src="/public/images/rector.jpg" 
                            alt={t('rector.name')} 
                            className="img-fluid rounded history-image"
                        />
                    </div>
                    <div className="rector-info">
                        <h3 className="rector-name">{t('rector.name')}</h3>
                        <p className="rector-position">{t('rector.position')}</p>
                        <div className="rector-details">
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
                                <span>{t('rector.birthInfo')}</span>
                            </div>
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faUniversity} className="detail-icon" />
                                <span>{t('rector.appointmentDate')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Достижения */}
                <div className="mb-5">
                    <div className="achievements-section">
                        <h3 className="text-center mb-4">{t('rector.achievementsTitle')}</h3>
                        <Row>
                            {achievements.map((achievement, index) => (
                                <Col md={6} lg={3} key={index} className="mb-4">
                                    <Card className="achievement-card h-100 text-center">
                                        <Card.Body>
                                            <FontAwesomeIcon icon={achievement.icon} size="2x" className="achievement-icon mb-3" />
                                            <h5 className="achievement-title">{t(`rector.achievements.${achievement.key}.title`)}</h5>
                                            <p className="achievement-description">{t(`rector.achievements.${achievement.key}.description`)}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

                {/* Биография и карьера */}
                <div className="mb-5 d-flex flex-column flex-lg-row gap-4">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <Card className="bio-card h-100">
                            <Card.Body>
                                <h4 className="bio-title">{t('rector.biography')}</h4>
                                <p className="bio-text">{t('rector.biographyText')}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="vision-card h-100">
                            <Card.Body>
                                <h4 className="vision-title">{t('rector.vision')}</h4>
                                <p className="vision-text">{t('rector.visionText')}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>

                {/* Цитата */}
                <div className="">
                    <Card className="quote-card">
                        <Card.Body className="text-center">
                            <FontAwesomeIcon icon={faUniversity} size="3x" className="quote-icon mb-3" />
                            <blockquote className="quote-text">
                                "{t('rector.quote')}"
                            </blockquote>
                            <cite className="quote-author">— {t('rector.name')}</cite>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Rector;