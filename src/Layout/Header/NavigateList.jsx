import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../utils/context';
import SideBarItem from '../../pages/Catalog/SideBar/SideBarItem';


const NavigateList = ({ closeModal }) => {
	const { t, i18n } = useTranslation()
	const { changeGender } = useContext(CustomContext)

	const handleClose = () => {
		closeModal();
	};
	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
	}
	return (
		<div className='list'>
			<div className='list__gender'>
				<div className='list__lang'>
					<p className={`list__lang-link ${i18n.language === 'ua' ? 'active' : ''}`} onClick={() => changeLanguage("ua")} >UA</p>
					<p className={`list__lang-link ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage("en")} >EN</p>
				</div>
				<div className='list__gender-link'>
					<Link
						onClick={() => {
							changeGender('woman')
							handleClose()
						}}
						to={`/catalog`}
						className='list__link' >{t("header.link1")}</Link>
					<Link onClick={() => {
						changeGender('men')
						handleClose()
					}} to={`/catalog`} className='list__link' >{t("header.link2")}</Link>
					<Link onClick={handleClose} to='/about' className='list__link' >{t("header.link3")}</Link>
				</div>


			</div>
			<div className='list__products'>
				<Link to={`/catalog`} onClick={handleClose} >
					<SideBarItem value={'t-short'} text={`${t("catalog.aside3")}`} />
				</Link>

				<Link to={`/catalog`} onClick={handleClose}>
					<SideBarItem value={'sweatshirts'} text={`${t("catalog.aside4")}`} />
				</Link>

				<Link to={`/catalog`} onClick={handleClose}>
					<SideBarItem value={'pants'} text={`${t("catalog.aside5")}`} />
				</Link>

				<Link to={`/catalog`} onClick={handleClose}>
					<SideBarItem value={'shoes'} text={`${t("catalog.aside6")}`} />
				</Link>

			</div>
		</div>

	)
}

export default NavigateList