import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../utils/context'

const CategoryTitle = () => {
	const { category } = useContext(CustomContext)
	const {t} = useTranslation()
	return (
		<span>
			{category === 't-short' && `${t("catalog.aside3")}`}
			{category === 'sweatshirts' && `${t("catalog.aside4")}`}
			{category === 'pants' && `${t("catalog.aside5")}`}
			{category === 'shoes' && `${t("catalog.aside6")}`}
		</span>
	)
}

export default CategoryTitle