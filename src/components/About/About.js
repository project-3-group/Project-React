import React from 'react';
import './About.css';
import { Card } from 'react-bootstrap';
import ScrollButton from './ScrollButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import tala from '../../assest/tala.jpeg';
import emam from '../../assest/personal-img.jpg'
import mohamad from '../../assest/mohammad.jpeg'
import saif from '../../assest/saif.jpeg'
import dina from '../../assest/dina.jpeg'

function About() {
  const teamMembers = [
    {
      name: 'Emam AL Mounqer',
      pictureUrl: emam,
      githubUrl: 'https://github.com/emammounqer',
      linkedinUrl: 'https://www.linkedin.com/in/emamalmounqer/',
      email: '',
      phone: '0777349925'
    },
    {
      name: 'Tala Asfan',
      pictureUrl: tala,
      githubUrl: 'https://github.com/asfantala',
      linkedinUrl: 'https://www.linkedin.com/in/tala-asfan-b827ab17b/',
      email: 'talaasfan@gmail.com',
      phone: '0795383053'
    },
    {
      name: 'Mohamad Shareef Naser',
      pictureUrl: mohamad,
      githubUrl: 'https://github.com/mshnas9',
      linkedinUrl: 'https://www.linkedin.com/in/mshnas9/',
      email: 'mshnas9@gmail.com',
      phone: '0788888384'
    },
    {
      name: 'Saif Obeidat',
      pictureUrl: saif,
      githubUrl: 'https://github.com/saifobe',
      linkedinUrl: 'https://www.linkedin.com/in/saif-obeidat-282730231',
      email: '',
      phone: '0795246002'
    },
    {
      name: 'Dina Jaradat',
      pictureUrl: dina,
      githubUrl: '',
      linkedinUrl: 'https://www.linkedin.com/in/deena-jaradat-518474255/',
      email: '',
      phone: '0781503192'
    }
  ];
  return (
    <div >
    <ScrollButton />
      <div className="about-section">
        <div className='about'>
          <h1 className='h-1' style= {{ textAlign: 'center' }}>About Us</h1>
          <p className='paragraph'>Our team consists of passionate full-stack developers who have honed their skills at LTUC. With our combined knowledge and experience, we were able to build this website as part of our prep project. We take pride in the fact that we are constantly learning and improving our craft. Our team is comprised of amazing individuals who share a passion for coding and problem-solving. It was a pleasure working together on this project.</p>

        </div>
        <div>
          <div className='our-team'>
        <h2  className='h-2' style={{ textAlign: 'center' }}>Our Team</h2>
        </div>
        
        <div className='team' >
          <Swiper
            effect={'coverflow'}
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'2'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: 'true'

            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_content'>
            <SwiperSlide>
              <Card style={{ width: '18rem' }} className='c-s'>
                <Card.Img variant="top" src={teamMembers[0].pictureUrl} className='image' />
                <Card.Body>
                  <Card.Title>{teamMembers[0].name}</Card.Title>

                  <Card.Text>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />{' '}
                      <a href={teamMembers[0].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedin} />{' '}

                      <a href={teamMembers[0].linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                    </div>
                    {teamMembers[0].email && (
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        <a href={`mailto:${teamMembers[0].email}`}>{teamMembers[0].email}</a>
                      </div>
                    )}
                    {teamMembers[0].phone && (
                      <div>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        <span>{teamMembers[0].phone}</span>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' }} className='c-s'>
                <Card.Img variant="top" src={teamMembers[1].pictureUrl} className='image' />
                <Card.Body>
                  <Card.Title>{teamMembers[1].name}</Card.Title>

                  <Card.Text>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />{' '}
                      <a href={teamMembers[1].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedin} />{' '}

                      <a href={teamMembers[1].linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                    </div>
                    {teamMembers[1].email && (
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        <a href={`mailto:${teamMembers[1].email}`}>{teamMembers[1].email}</a>
                      </div>
                    )}
                    {teamMembers[1].phone && (
                      <div>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        <span>{teamMembers[1].phone}</span>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' }} className='c-s'>
                <Card.Img variant="top" src={teamMembers[2].pictureUrl} className='image' />
                <Card.Body>
                  <Card.Title>{teamMembers[2].name}</Card.Title>

                  <Card.Text>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />{' '}
                      <a href={teamMembers[2].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedin} />{' '}

                      <a href={teamMembers[2].linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                    </div>
                    {teamMembers[2].email && (
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        <a href={`mailto:${teamMembers[2].email}`}>{teamMembers[2].email}</a>
                      </div>
                    )}
                    {teamMembers[2].phone && (
                      <div>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        <span>{teamMembers[2].phone}</span>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' }} className='c-s'>
                <Card.Img variant="top" src={teamMembers[3].pictureUrl} className='image' />
                <Card.Body>
                  <Card.Title>{teamMembers[3].name}</Card.Title>

                  <Card.Text>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />{' '}
                      <a href={teamMembers[3].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedin} />{' '}

                      <a href={teamMembers[3].linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                    </div>
                    {teamMembers[3].email && (
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        <a href={`mailto:${teamMembers[3].email}`}>{teamMembers[3].email}</a>
                      </div>
                    )}
                    {teamMembers[3].phone && (
                      <div>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        <span>{teamMembers[3].phone}</span>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' }} className='c-s'>
                <Card.Img variant="top" src={teamMembers[4].pictureUrl} className='image' />
                <Card.Body className='bodycard'>
                  <Card.Title>{teamMembers[4].name}</Card.Title>

                  <Card.Text>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />{' '}
                      <a href={teamMembers[4].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedin} />{' '}

                      <a href={teamMembers[4].linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                    </div>
                    {teamMembers[4].email && (
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                        <a href={`mailto:${teamMembers[4].email}`}>{teamMembers[4].email}</a>
                      </div>
                    )}
                    {teamMembers[4].phone && (
                      <div>
                        <FontAwesomeIcon icon={faPhone} />{' '}
                        <span>{teamMembers[4].phone}</span>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <div className='slider-controler'>
              <div className='swiper-button-prev slider-arrow'>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className='swiper-button-next slider-arrow'>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className='swiper-pagination'></div>
            </div>
          </Swiper>

        </div>
        </div>
          <ScrollButton/>

      </div>


    </div>
  );
}

export default About;