import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import begin1 from '../../../assets/begin/beginImg1.png'

const Begin = () => {
	const { t } = useTranslation()
	return (
		<section className="begin">
			<div className="begin__content">
				<h2 className="begin__title">
					<span className="begin__title-small">
					{t("begin.title")}
					</span>
					<br />
					american vintage
				</h2>
				<Link href="#" className="begin__link">
				{t("begin.subtitle")}
				</Link>
				<img src={begin1} alt="" className="begin__img" />
			</div>
		</section>
	);
};

export default Begin;