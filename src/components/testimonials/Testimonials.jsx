import React from 'react'
import './testimonials.css'
import avt from '../../assets/avatar.jpg'
import {Pagination,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{clickable:true}}
        >

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt} alt=''/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi ipsam, reiciendis minus minima iusto beatae eum! Sequi, odit laudantium labore quod quasi ullam minus vero voluptate esse alias blanditiis.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt} alt=''/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi ipsam, reiciendis minus minima iusto beatae eum! Sequi, odit laudantium labore quod quasi ullam minus vero voluptate esse alias blanditiis.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt} alt=''/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi ipsam, reiciendis minus minima iusto beatae eum! Sequi, odit laudantium labore quod quasi ullam minus vero voluptate esse alias blanditiis.
            </small>
        </SwiperSlide>
 
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt} alt=''/>
          </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi ipsam, reiciendis minus minima iusto beatae eum! Sequi, odit laudantium labore quod quasi ullam minus vero voluptate esse alias blanditiis.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials