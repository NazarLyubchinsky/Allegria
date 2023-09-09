import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/context'
import SideBarItem from './SideBarItem'

const SideBar = () => {
	const { t } = useTranslation()

	const { gender, changeGender, } = useContext(CustomContext)

	return (
		<aside className='sidebar'>
			<div className='sideBar__lang'>
				<p onClick={() => changeGender('woman')} className={`sideBar__lang-item ${gender === 'woman' ? 'active' : ''}`}>{t("catalog.aside1")}</p>
				<p onClick={() => changeGender('men')} className={`sideBar__lang-item ${gender === 'men' ? 'active' : ''}`}>{t("catalog.aside2")}</p>
			</div>
			<ul className='sideBar__menu'>
				<SideBarItem value={'t-short'} text={`${t("catalog.aside3")}`} />
				<SideBarItem value={'sweatshirts'} text={`${t("catalog.aside4")}`} />
				<SideBarItem value={'pants'} text={`${t("catalog.aside5")}`} />
				<SideBarItem value={'shoes'} text={`${t("catalog.aside6")}`} />

			</ul>
		</aside>

	)
}

export default SideBar