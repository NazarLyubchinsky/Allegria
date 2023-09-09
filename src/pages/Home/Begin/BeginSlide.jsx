import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { Link } from 'react-router-dom';
import begin1 from '../../../assets/begin/beginImg1.png'
import { Autoplay } from 'swiper/modules';

const BeginSlide = () => {
	const { t } = useTranslation()

	return (
		<Swiper
			loop={true}
			speed={1500}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			className="Swiper"
		>
			<SwiperSlide>
				<div className="begin__content">
					<h2 className="begin__title">
						<span className="begin__title-small">
							{t("begin.title")}
							<br />
						</span>
						american vintage
					</h2>
					<Link href="#" className="begin__link">
						{t("begin.subtitle")}
					</Link>
					<img src={begin1} alt="" className="begin__img" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="begin__content">
					<div className="begin__contentSecond">
						<h2 className="begin__title">
							<span className="begin__title-small">
								{t("begin.title")}
							</span>
							<br />
							george gina
							lucy

						</h2>
						<Link href="#" className="begin__link">
							{t("begin.subtitle")}
						</Link>
					</div>
					<img src={begin1} alt="" className="begin__imgSecond" />
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default BeginSlide;