
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"
import { useTranslation } from 'react-i18next';


const Popular = () => {
	const { t, i18n } = useTranslation()
	return (
		<section className="popular">
			<div className="container">
				<h2 className="popular__title">
					{t("popular.title")}
				</h2>
				<Swiper

					slidesPerView={3}
					spaceBetween={30}
					navigation={{
						nextEl: ".popular-next",
						prevEl: ".popular-prev"
					}}
					loop={true}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						567: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					modules={[Navigation]}
					className="popularSwiper"

				>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="products__card">
							<img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img" />
							<p>REPlay</p>
							<p className="products__card-category">
								Classic shoes
							</p>
							<p className="products__card-price">
								<span className="products__card-oldPrice">6100
									{i18n.language === 'ua' ? ' грн.' : ' $'}
								</span>
								3800
								{i18n.language === 'ua' ? ' грн.' : ' $'}
							</p>
						</div>
					</SwiperSlide>
					<button className="popular-btn popular-prev">
						<SlArrowLeft />
					</button>
					<button className="popular-btn popular-next">
						<SlArrowRight />
					</button>
				</Swiper>
			</div>
		</section>
	);
};

export default Popular;