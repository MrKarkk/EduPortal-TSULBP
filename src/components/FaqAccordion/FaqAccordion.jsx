import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

import getFrequentQuestions from '../../data/frequentQuestions';


function FaqAccordion() {
    const { t } = useTranslation();
    
    // Получаем вопросы с переводами
    const frequentQuestions = getFrequentQuestions(t);

    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-success mb-5'>{t('faqAccordion.title')}</h2>
                <p className='text-center mb-5'>{t('faqAccordion.subtitle')}</p>
                <Accordion defaultActiveKey="" flush>
                    {frequentQuestions.map((item) => (
                        <Accordion.Item key={item.id} eventKey={item.eventKey}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
                
            </div>
        </div>
    )
}

export default FaqAccordion;