import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import ChooseSection from '../../components/ChooseSection/ChooseSection';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import RunningLine from '../../components/RunningLine/RunningLine';
import HistoryUniversity from '../../components/App/HistoryUniversity';
import Rector from '../../components/App/Rector';
import ModalWindow from '../../components/Modal/Modal.jsx';
import ProRector from '../../components/App/ProRector';
import AcademicCouncil from '../../components/App/AcademicCouncil';

import blogs from '../../data/blogsData';

import './Home.css';
import StartCoursesImg from '../../utils/images/home/start-courses-img.jpg';


function Home() {
    const { t } = useTranslation();
    const [selectedBlog, setSelectedBlog] = useState(null); 

    const handleClose = () => setSelectedBlog(null);
    const handleOpen = (blog) => setSelectedBlog(blog);

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center fw-semibold'>{t('home.title')}</h1>
                    <p className='text-center'>{t('home.subtitle')}</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center mt-md-3'>
                        <Link to="/faculties">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('home.ourFaculties')}</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('home.contactUs')}</button>
                        </Link>
                    </div>
                </div>
            </header>

            <RunningLine /> 

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className="py-5">
                <HistoryUniversity />
            </div>

            <div className="py-5">
                <Rector />
            </div>

            <div className="py-5">
                <ProRector />
            </div>

            <div className="py-5">
                <AcademicCouncil />
            </div>

            {/* <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>{t('home.startCourses2025')}</h2>
                            <p>{t('home.startCoursesDesc')}</p>
                            <Link to="/faculties">
                                <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('home.learnMore')}</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>{t('news.title')}</h2>
                    <div className='row g-4'>
                        {blogs.slice(0, 3).map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card onClick={() => handleOpen(blog)} style={{cursor: "pointer"}} className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{t(`${blog.key}.title`)}</Card.Title>
                                        <Card.Text>{t(`${blog.key}.excerpt`)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-success btn-lg mt-5'>{t('blog.readMoreBlogs')}</button>
                    </Link>
                </div>
            </div>

            {/*  <Modal show={!!selectedBlog}  onHide={handleClose}  size="lg"  centered fullscreen="lg-down" >
                <Modal.Body>
                    {selectedBlog && (
                        <>
                            <img 
                                src={selectedBlog.img} 
                                alt={t(`${selectedBlog.key}.title`)} 
                                className="img-fluid mb-4"
                            />
                            <Modal.Title>
                                {selectedBlog && t(`${selectedBlog.key}.title`)}
                            </Modal.Title>
                            <p>{t(`${selectedBlog.key}.excerpt`)}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button type='button'  variant="secondary"  onClick={handleClose} className='btn btn-success'>{t('news.close')}</button>
                </Modal.Footer>
            </Modal> */}
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

export default Home;