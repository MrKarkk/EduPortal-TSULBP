import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


function AcademicCouncil() {
    const { t } = useTranslation();
    
    return (
        <section className="rector-section py-5">
            <Container>
                {/* Заголовок */}
                <div className="text-center mb-5">
                    <h2 className="section-title">{t("academicCouncil.title")}</h2>
                    <p className="section-subtitle">{t("academicCouncil.subtitle")}</p>
                </div>

                {/* Фото и основная информация */}
                <div className="d-flex flex-column flex-lg-row align-items-center mb-5">
                    <div className="rector-image-container w-50 mb-4 mb-lg-0">
                        <img
                            src="/images/academic_council.jpg"
                            alt="Учёный совет ТГУПБП"
                            className="img-fluid rounded shadow-lg history-image"
                        />
                    </div>
                    <div className="rector-info px-lg-4">
                        <h3 className="rector-name">{t("academicCouncil.chairman")}</h3>
                        <p className="rector-position">{t("academicCouncil.secretary")}</p>
                        <div className="rector-details">
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faUsers} className="detail-icon" />
                                <span>{t("academicCouncil.structure")}</span>
                            </div>
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faPhone} className="detail-icon" />
                                <span>{t("academicCouncil.phone")} 2-08-43</span>
                            </div>
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                                <span>E-mail: shuroi-olimon@tgu.tj</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Биография и задачи */}
                <Row className="g-4">
                    <Col lg={6}>
                        <Card className="bio-card h-100 shadow-sm">
                            <Card.Body>
                                <h4 className="bio-title">{t("academicCouncil.council")}</h4>
                                <p className="bio-text">{t("academicCouncil.descriptionCouncil")}</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="vision-card h-100 shadow-sm">
                            <Card.Body>
                                <h4 className="vision-title">{t("academicCouncil.activity")}</h4>
                                <p className="vision-text">{t("academicCouncil.descriptionActivity")}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AcademicCouncil;
