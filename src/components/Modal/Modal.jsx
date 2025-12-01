import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Modal.css';

function ModalWindow({ 
    show, 
    onHide, 
    blog, 
    size = "lg", 
    centered = true,
    fullscreen = "lg-down" 
}) {
    const { t } = useTranslation();

    if (!blog) return null;

    return (
        <Modal show={show} onHide={onHide} size={size} centered={centered} fullscreen={fullscreen} className="blog-modal" >
            
            <Modal.Body className="px-4 pb-4">
                <div className="text-center mb-4">
                    <img 
                        src={blog.img} 
                        alt={t(`${blog.key}.title`)} 
                        className="modal-image"
                    />
                </div>
                <Modal.Title className="text-success fw-bold">
                    {t(`${blog.key}.title`)}
                </Modal.Title>
                <div className="modal-content-text">
                    <p className="text-muted mb-3">
                        <small>{blog.date || new Date().toLocaleDateString()}</small>
                    </p>
                    <div className="blog-content mb-3">
                        {t(`${blog.key}.excerpt`)}
                    </div>
                </div>
                <Button 
                    variant="success" 
                    onClick={onHide}
                    className="px-4 py-2 mt-3 mx-auto d-block"
                >
                    {t('modal.close')}
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default ModalWindow;