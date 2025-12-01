import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import blogs from '../../data/blogsData';
import { useTranslation } from 'react-i18next';
import ModalWindow from '../../components/Modal/Modal';

import './Blog.css';

function Blog() {
    const { t } = useTranslation();
    const [selectedBlog, setSelectedBlog] = useState(null); 

    const handleClose = () => setSelectedBlog(null);
    const handleOpen = (blog) => setSelectedBlog(blog);

    return (
        <div className='blog-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>{t('news.title')}</h1>
                    <p className='text-center w-75 mb-5'>{t('blog.subtitle')}</p>
                </div>
            </header>

            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <div className="row g-4">
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card 
                                    className='h-100 shadow scale-hover-effect bg-white text-light border-0' 
                                    style={{cursor: "pointer"}}
                                    onClick={() => handleOpen(blog)}
                                >
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='text-success fs-3 mb-4 text-center'>{t(`${blog.key}.title`)}</Card.Title>
                                        <Card.Text className='text-dark'>{t(`${blog.key}.excerpt`)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            <ModalWindow 
                show={!!selectedBlog}
                onHide={handleClose}
                blog={selectedBlog}
                size="lg"
                centered={true}
                fullscreen="lg-down"
            />
        </div>
    )
}

export default Blog;
