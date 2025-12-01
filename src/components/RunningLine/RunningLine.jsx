import React from 'react';
import { useTranslation } from 'react-i18next';
import './RunningLine.css';

const RunningLine = () => {
    const { t } = useTranslation();

    const runningItems = [
        {text: t('runningLine.admission') },
        {text: t('runningLine.newPrograms') },
        {text: t('runningLine.scholarships') },
        {text: t('runningLine.career') },
        {text: t('runningLine.international') },
        {text: t('runningLine.achievements') },
        {text: t('runningLine.graduates') },
        {text: t('runningLine.consultation') }
    ];

    return (
        <div className="running-line-container">
            <div className="running-line">
                <div className="running-content">
                    {[...runningItems, ...runningItems].map((item, index) => (
                        <div key={index} className="running-item">
                            <span className="running-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RunningLine;