import React from 'react';
import aboutImg from '../../../assets/about/about.png'
import { useTranslation } from "react-i18next";

const About = () => {

	const { t } = useTranslation()

	return (
		<section className="about">
			<div className="container-small">
				<div className="about__content">
					<div className="about__info">
						<h2 className="about__title">
							{t("about.title")}
						</h2>
						<p className="about__desc">
						{t("about.subtitle")}
						</p>
					</div>

					<img src={aboutImg} alt="" className="about__right-img" />
				</div>
			</div>
		</section>
	);
};

export default About;