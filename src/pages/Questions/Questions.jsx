import React from 'react';
import QuestionsItem from "./QuestionsItem/QuestionsItem";
import { useTranslation } from 'react-i18next';



const Questions = () => {
	const { t } = useTranslation()
	const questionsData = [
		{
			id: 1,
			question: `${t("questions.questionsData.question")}`,
			answer: `${t("questions.questionsData.answer")}`
		},
		{
			id: 2,
			question: `${t("questions.questionsData.question")}`,
			answer: `${t("questions.questionsData.answer")}`
		},
		{
			id: 3,
			question: `${t("questions.questionsData.question")}`,
			answer: `${t("questions.questionsData.answer")}`
		},
		{
			id: 4,
			question: `${t("questions.questionsData.question")}`,
			answer: `${t("questions.questionsData.answer")}`
		},
		{
			id: 5,
			question: `${t("questions.questionsData.question")}`,
			answer: `${t("questions.questionsData.answer")}`
		}
	]
	return (
		<section className="questions">
			<div className="container">
				<ul className='breadCrumbs'>
					<li className='breadCrumbs__item'>{t("questions.home")}</li>
					<li className='breadCrumbs__item'>
						{t("questions.faq")}
					</li>
				</ul>
			</div>
			<div className="container-small">
				<h2 className="questions__title">
					{t("questions.faq")}
				</h2>
				<div className="questions__row">
					<ul className="questions__list">
						<li className="questions__list-title">
							{t("questions.shopping")}
						</li>
						{
							questionsData.map((item) => (
								<QuestionsItem key={item.id} item={item} />
							))
						}
					</ul>
					<form className="questions__form">
						<h2 className="questions__form-title">
							{t("questions.contact")}
							<br />
							{t("questions.writeTous")}

						</h2>
						<div className="questions__form-block">
							<input type="text" className="questions__form-input" placeholder={t("questions.name")} />
							<input type="email" className="questions__form-input" placeholder={t("questions.email")} />
							<p className="questions__form-ques">
								{t("questions.interest")}
							</p>
							<textarea className="questions__form-area" placeholder={t("questions.message")}></textarea>
							<button className="questions__form-btn">
								{t("questions.send")}
							</button>
						</div>
					</form>
				</div>

			</div>
		</section>
	);
};

export default Questions;