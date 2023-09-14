import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/thumbs";

const ProductSlide = ({ product }) => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="product__slide">
			<Swiper
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Thumbs]}
				className="mySwiper2"
			>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[0]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[1]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[2]}`} alt="" />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				className="mySwiper"
			>
				<SwiperSlide >
					<img className='product__slide-img' src={`.${product.img[0]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[1]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[2]}`} alt="" />
				</SwiperSlide>
			</Swiper>

			<Swiper
				slidesPerView={1.5}
				spaceBetween={10}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				initialSlide={1.5}
				className="mySwiper3"
				breakpoints={{
					320: {
						slidesPerView: 1.5,
						initialSlide:1.5
					},
					375: {
						slidesPerView: 1.5,
						initialSlide:1.5
					},
					555: {
						slidesPerView: 1.2,
						initialSlide:1.2
					},
					650: {
						slidesPerView: 1.5,
					},
				
				}}
			>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[0]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[1]}`} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className='product__slide-img' src={`.${product.img[2]}`} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ProductSlide;