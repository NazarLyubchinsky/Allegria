import React, { useContext } from 'react'
import CategoryTitle from '../../../components/CategoryTitle/CategoryTitle'
import { CustomContext } from '../../../utils/context'
import { useTranslation } from "react-i18next";

const BreadCrumbs = () => {

	const {state} = useContext(CustomContext)
	const { t } = useTranslation()
	return (
		<ul className='breadCrumbs'>
			<li className='breadCrumbs__item'>{t("catalog.menu1")}</li>
			<li className='breadCrumbs__item'>
				{state.catalog.gender === 'woman' && `${t("catalog.aside1")}`}
				{state.catalog.gender === 'men' && `${t("catalog.aside2")}`}
			</li>
			<li className='breadCrumbs__item'>
				<CategoryTitle />
			</li>
		</ul>
	)
}

export default BreadCrumbs