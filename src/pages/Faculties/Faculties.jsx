import React from 'react';
import './Faculties.css';
import { Card } from 'react-bootstrap';
import faculties from '../../data/facultiesData';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';


function Faculties() {
    return (
        <div className='faculties-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Faculties</h1>
                    <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!</p>
                </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {faculties.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} className='img-fluid' width='500' height='400' />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='text-center fs-1 text-success'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                    <button type='button' className='btn btn-outline-light text-capitalize fw-semibold'>View course</button>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <FaqAccordion />
            </div>
        </div>
    )
}

export default Faculties;