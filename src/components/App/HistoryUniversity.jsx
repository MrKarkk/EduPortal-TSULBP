import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from "react-countup";
import { 
    faCalendarAlt, 
    faUserGraduate, 
    faChalkboardTeacher, 
    faBuilding
} from '@fortawesome/free-solid-svg-icons';
import './HistoryUniversity.css';


function HistoryUniversity() {
    const { t } = useTranslation();

    const stats = [
        {
            icon: faCalendarAlt,
            number: "30+",
            key: "years"
        },
        {
            icon: faUserGraduate,
            number: "8,000+",
            key: "students"
        },
        {
            icon: faChalkboardTeacher,
            number: "170+",
            key: "professors"
        },
        {
            icon: faBuilding,
            number: "7",
            key: "faculties"
        }
    ];

    return (
        <section className="py-5">
            <div className="container">
                {/* Заголовок секции */}
                <div className="mb-5 text-center">
                    <h2 className="section-title">{t('history.title')}</h2>
                    <p className="section-subtitle">{t('history.subtitle')}</p>
                </div>

                {/* Основной контент */}
                <div className="align-items-center mb-5 d-flex flex-column flex-lg-row">
                    <div className="history-text w-50">
                        <h3 className="history-heading">{t('history.founded')}</h3>
                        <p className="history-description">
                            {t('history.foundedText')}
                        </p>
                        
                        <h4 className="history-subheading">{t('history.specializations')}</h4>
                        <p className="history-description">
                            {t('history.specializationsText')}
                        </p>
                    </div>
                    <div className="history-image-container">
                        <img
                            src="/public/images/university-building.jpg"
                            alt={t('history.buildingAlt')}
                            className="history-image"
                        />
                    </div>
                </div>

                {/* Статистика роста */}
                <div className="mb-5">
                    <div className="growth-stats">
                        <h3 className="text-center mb-4">{t('history.growth')}</h3>
                        <Row>
                            {stats.map((stat, index) => (
                                <Col md={6} lg={3} key={index} className="mb-3">
                                    <Card className="stat-card h-100 text-center">
                                        <Card.Body>
                                            <FontAwesomeIcon icon={stat.icon} size="2x" className="stat-icon mb-3" />
                                            <h4 className="stat-number">
                                                <CountUp 
                                                    end={parseInt(stat.number)} 
                                                    duration={20} 
                                                    suffix={stat.number.includes('+') ? '+' : ''} 
                                                />
                                            </h4>
                                            <p className="stat-label">{t(`history.stats.${stat.key}`)}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

                {/* Достижения и развитие */}
                <div className="d-flex flex-column flex-lg-row">
                    <div className="history-image-container">
                        <img
                            src="/public/images/university-campus.jpg"
                            alt={t('history.buildingAlt')}
                            className="history-image "
                        />
                    </div>
                    <div className="achievements-text w-50">
                        <h3 className="history-heading">{t('history.infrastructure')}</h3>
                        <p className="history-description">
                            {t('history.infrastructureText')}
                        </p>
                        
                        <h4 className="history-subheading">{t('history.international')}</h4>
                        <p className="history-description">
                            {t('history.internationalText')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HistoryUniversity;