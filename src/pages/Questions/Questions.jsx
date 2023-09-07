import React from 'react';
import { questionsData } from './QuestionsItem/question';
import QuestionsItem from './QuestionsItem/QuestionsItem';

const Questions = () => {
	return (
		<section className="questions">
			<div className="container">
				<ul className='breadCrumbs'>
					<li className='breadCrumbs__item'>Главная</li>
					<li className='breadCrumbs__item'>
						Популярные вопросы
					</li>
				</ul>
			</div>
			<div className="container-small">
				<h2 className="questions__title">
					Популярные вопросы
				</h2>
				<ul className="questions__list">
					<li className="questions__list-title">
						ПОКУПКИ
					</li>
					{
						questionsData.map((item) => (
							<QuestionsItem item={item} />
						))
					}
				</ul>
			</div>
		</section>
	);
};

export default Questions;