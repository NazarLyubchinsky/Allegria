import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductTitle = ({ product }) => {
	const { i18n } = useTranslation()

	return (
		<>
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
		</>
	)
}

export default ProductTitle