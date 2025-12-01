import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import persons from '../../data/personsData';
import { useTranslation } from 'react-i18next';

import AboutUsSectionImg from '../../utils/images/about/about-us-section-img.jpg';
import './About.css';


function About() {
    const { t } = useTranslation();

    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>{t('about.title')}</h1>
                    <p className='text-center w-75 mb-5'>{t('about.subtitle')}</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>{t('about.studyWithUs')}</h2>
                        <p>{t('about.studyWithUsDesc1')}</p>
                        <p className='mb-4 mb-lg-5'>{t('about.studyWithUsDesc2')}</p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('about.contactUs')}</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div>

            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <h2 className='text-center mb-5'>{t('about.OurWinners')}</h2>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-4'>
                                <img src={person.img} className='img-fluid' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;