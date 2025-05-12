import '../styles/Testimonials.css'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { StarIcon } from '@heroicons/react/24/solid'

import { testimonials } from './Data'

function Testimonial() {
    return (
        <section className='testimonials'>
            <div className='row align-items-center'>
                <div className='col-lg-5 info'>
                    <h3>Testimonials</h3>
                    <p>
                        Hear directly from the people whose lives have been impacted by <b>Smart-Life Care</b>. Our commitment to fast, reliable, and compassionate ambulance services makes a real difference every day.
                    </p>
                </div>

                <div className='col-lg-7'>
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade, Navigation]}
                        loop={true}
                        speed={850}
                        effect='Fade'
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        slidesPerView="auto"
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.name}>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={testimonial.src} alt="" className="testimonial-img flex-shrink-0" />
                                        <div>
                                            <h3>{testimonial.name}</h3>
                                            <h4>{testimonial.job}</h4>
                                            <div className="stars">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, index) => (
                                                        <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        <i className="text-2xl text-gray-400 mr-2 ">&#8220;</i>
                                        <span>{testimonial.comment}</span>
                                        <i className="text-2xl text-gray-400 ml-2">&#8221;</i>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
