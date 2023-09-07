import React, { useContext } from 'react'
import CategoryTitle from '../../../components/CategoryTitle/CategoryTitle'
import { CustomContext } from '../../../utils/context'

const BreadCrumbs = () => {

	const { gender } = useContext(CustomContext)

	return (
		<ul className='breadCrumbs'>
			<li className='breadCrumbs__item'>Головна</li>
			<li className='breadCrumbs__item'>
				{gender === 'women' && 'Женщины'}
				{gender === 'men' && 'Мужчины'}
			</li>
			<li className='breadCrumbs__item'>
				<CategoryTitle />
			</li>
		</ul>
	)
}

export default BreadCrumbs