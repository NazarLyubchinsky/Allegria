import React, { useContext } from 'react'
import { CustomContext } from '../../utils/context'

const CategoryTitle = () => {
	const {category} = useContext(CustomContext)

	return (
		<span>
			{category === 't-short' && 'Футболки'}
			{category === 'sweatshirt' && 'Кофты'}
			{category === 'pants' && 'Штаны'}
			{category === 'shoes' && 'Взуття'}
		</span>
	)
}

export default CategoryTitle