import React from 'react';
import { useTranslation } from "react-i18next";
const ProductInfo = ({ product }) => {
	const { i18n } = useTranslation()
	return (
		<div className="product__info">
			<h2 className="product__title">
				{product.title}
			</h2>
			<p className="product__category">
				{product.category}
			</p>
			<p className="product__price">
				{i18n.language === 'en' ? product.price : product.price * 83}
				{i18n.language === 'ru' ? ' руб.' : ' $'}
			</p>
			<p className="product__title-size">
				Размер
			</p>
			<ul className="product__list">
				{
					product.sizes.map((item) => (
						<li key={item.id} className={`${item.inStock > 0 ? 'product__size' : 'product__size_null'}`}>
							{item.size}
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default ProductInfo;