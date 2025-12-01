import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faSquareFacebook, faSquareInstagram, faYoutube, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CurrentYear from './CurrentYear'
import './Footer.css';


export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className='container my-5'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-md-7'>
                    <div className='d-row d-md-flex justify-content-between align-items-center'>
                        <div className='col-md-6 col-lg-5'>
                            <div className="map-responsive">
                                <iframe
                                title="University Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24341.638051068145!2d69.612671!3d40.304514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1b3990ae8dffd%3A0xbee3b5e242546cc5!2z0KLQsNC00LbQuNC60YHQutC40Lkg0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YIg0J_RgNCw0LLQsCwg0JHQuNC30L3QtdGB0LAsINC4INCf0L7Qu9C40YLQuNC60Lg!5e0!3m2!1sru!2sus!4v1759863142900!5m2!1sru!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className='col-sm-6 col-lg-7 my-4 my-md-0' style={{ marginLeft: '60px' }}>
                        <ul className='footer-social-icons list-unstyled d-flex justify-content-sm-between'>
                            <Link to="/contact">
                                <li>
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className='mx-3 mx-sm-0'>
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className='me-3 me-sm-0'>
                                    <FontAwesomeIcon icon={faTelegram} />
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </li>
                            </Link>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className='col-md-4'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <p>{t('footer.address')} 17th microdistrict, Khuland, Tajikistan</p>
                            </li>
                            <li>
                                <p>{t('footer.phone')}: <a href="tel:+992342223811" className='text-dark'>+992342223811</a></p>
                            </li>
                            <li>
                                <p>{t('footer.email')}: <a href="mailto:london@university.com" className='text-dark'>tsulbp@university.tj</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-body-tertiary'>
                <div className='container'>
                    <p className='p-3 m-0 text-center'>&copy; {CurrentYear()} TSULBP / made by <Link to='https://github.com/MrKarkk' style={{textDecoration: 'none', color: '#000000'}} target="_blank">Aziz Abdurahimov</Link></p>
                </div>
            </div>
        </footer>
    )
}