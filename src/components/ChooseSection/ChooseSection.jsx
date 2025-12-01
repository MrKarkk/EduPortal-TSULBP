import React from 'react';
import { useTranslation } from 'react-i18next';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUserGraduate, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    const { t } = useTranslation();

    return (
        <div className='choose-section'>
            <div className="container">
                <h2 className='text-center mb-5'>{t('chooseSection.title')}</h2>
                <div className='row g-4'>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                <FontAwesomeIcon icon={faTrophy} className="text-success" size="2x" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>{t('chooseSection.academic')}</Card.Title>
                                <Card.Text className='text-center'>{t('chooseSection.moreAcademic')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                <FontAwesomeIcon icon={faUserGraduate} className="text-success" size="2x" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>{t('chooseSection.student')}</Card.Title>
                                <Card.Text className='text-center'>{t('chooseSection.moreStudent')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                <FontAwesomeIcon icon={faHandshake} className="text-success" size="2x" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>{t('chooseSection.partnerships')}</Card.Title>
                                <Card.Text className='text-center'>{t('chooseSection.morePartnerships')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSection;
