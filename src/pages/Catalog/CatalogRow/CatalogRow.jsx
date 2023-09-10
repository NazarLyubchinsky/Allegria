import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CustomContext } from '../../../utils/context'

const CatalogRow = () => {

	const { dispatch, state } = useContext(CustomContext)
	const { i18n } = useTranslation()


	if (state.catalog.products.error.length) {
		return <h2>{state.catalog.products.error.message}</h2>
	}
	return (
		<>
			<div className='catalog__row'>
				{
					state.catalog.products.data && state.catalog.products.data.filter((item) => {
						return state.catalog.size ? item.sizes.find((el) => el.size === state.catalog.size).inStock : item
					}).filter((item, idx) => {
						return state.catalog.page === 1 ? idx < 6 : idx < state.catalog.page * 6 && idx > state.catalog.page * 6 - 7
					}).map((item) => (
						<div key={item.id} className='catalog__card'>
							<Link to={`/product/${item.id}`}>
								<img className='catalog__card-img' src={`../${item.img[0]}`} alt={item.title} />
							</Link>
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
			<ul className='catalog__pagination'>
				{
					Math.ceil(state.catalog.products.dataLength / 6) > 1 && new Array(Math.ceil(state.catalog.products.dataLength / 6)).fill(null).map((item, idx) => (
						<li onClick={() => {
							dispatch({ type: 'change_page', payload: idx + 1 })
						}} key={idx} className={`catalog__page ${state.catalog.page === idx + 1 ? 'active' : ''}`}>
							{idx + 1}
						</li>
					))
				}
			</ul>
		</>
	)
}

export default CatalogRow