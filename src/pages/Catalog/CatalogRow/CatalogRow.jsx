import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/context'

const CatalogRow = () => {

	const { products } = useContext(CustomContext)
	const { i18n } = useTranslation()
	return (
		<div className='catalog__row'>
			{
				products.data.map((item) => (
					<div key={item.id} className='catalog__card'>
						<img className='catalog__card-img' src={`../${item.img[0]}`} alt={item.title} />
						<h3 className='catalog__card-title'>
							{item.title}
						</h3>
						<p className='catalog__card-categoty'>{item.category}</p>
						<p className='catalog__card-brand'>{item.brand}</p>
						<p className='catalog__card-price'>
							{i18n.language === 'en' ? item.price : item.price * 39}
							{i18n.language === 'ua' ? ' грн.' : ' $'}
						</p>
					</div>
				))
			}
		</div>
	)
}

export default CatalogRow