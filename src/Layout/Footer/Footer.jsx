import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {

	const { t } = useTranslation()

	return (
		<footer className="footer">
			<div className="footer__top">
				<h2 className="footer__title">
					{t("footer.title")}
				</h2>
				<form className="footer__form">
					<input type="text" className="footer__form-input" />
					<button className="footer__form-btn">
						<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 4H8.5M8.5 4L6 1M8.5 4L6 7" stroke="#E64926" />
						</svg>
					</button>
				</form>
				<ul className="footer__list">
					<li className="footer__item">
						<Link className="footer__link" to='about'>
							{t("footer.link1")}
						</Link>
					</li>
					<li className="footer__item">
						<Link className="footer__link" to='questions'>
							{t("footer.link2")}
						</Link>
					</li>
					<li className="footer__item">
						<Link className="footer__link" >
							{t("footer.link3")}
						</Link>
					</li>
				</ul>
			</div>
			<div className="container">
				<div className="footer__bottom">
					<p className="footer__text">{t("footer.text1")} © 2023 Allegria.com</p>
					<p style={{ display: 'flex', gap: "15px" }}>
						<Link to='https://github.com/NazarLyubchinsky' target='_blank'><AiFillGithub style={{ fontSize: '24px' }} /></Link>
						<Link to='https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/' target='_blank'><AiFillLinkedin style={{ fontSize: '24px' }} /></Link>
					</p>
					<p className="footer__text">{t("footer.text2")} </p>
				</div>
			</div>

		</footer>
	);
};

export default Footer;