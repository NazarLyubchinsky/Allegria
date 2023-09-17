import React, { useContext, useState } from 'react'
import SelectBrand from './SelectBrand'
import SelectPrice from './SelectPrice'
import SelectSize from './SelectSize'
import { AiFillCaretDown } from 'react-icons/ai';
import { GoArrowLeft } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../../utils/context';
import SideBarItem from '../SideBar/SideBarItem';
import { Link } from 'react-router-dom';

const CatalogFilter = () => {
	const { t } = useTranslation()
	const { changeGender, state } = useContext(CustomContext)

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen1, setIsModalOpen1] = useState(false);


	const openFilter = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};
	const openSort = () => {
		setIsModalOpen1(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = (e) => {
		e.stopPropagation();
		setIsModalOpen(false);
		setIsModalOpen1(false)
		document.body.style.overflow = 'auto';

	};

	return (
		<div className='filter'>
			<div className='filter__select'>
				<SelectSize />
			</div>
			<div className='filter__select-mobile'>
				<button onClick={openFilter} className='filter__select-mobile_filter'>
					{t("catalog.filter.filter")}
					<AiFillCaretDown />
					{isModalOpen ? (
						<>
							<div className='modal'>
								<div className='modal__close' onClick={closeModal}  >
								</div>
								<div className='modal__content' >
									<div className='modal__content-top'>
										<div className='modal__content-row'>
											<GoArrowLeft size="24px" style={{ display: 'none' }} />
											<p>{t("catalog.filter.filter")}</p>
											<AiOutlineClose onClick={closeModal} />
										</div>
									</div>
									<div className='modal__content-center'>
										<SelectBrand />
										<SelectSize />
										<div className='sideBar__lang'>
											<p onClick={() => changeGender('woman')} className={`sideBar__lang-item ${state.catalog.gender === 'woman' ? 'active' : ''}`}>{t("catalog.aside1")}</p>
											<p onClick={() => changeGender('men')} className={`sideBar__lang-item ${state.catalog.gender === 'men' ? 'active' : ''}`}>{t("catalog.aside2")}</p>
										</div>
										<ul className='sideBar__menu'>
											<Link to={`/catalog`} onClick={closeModal} >
												<SideBarItem value={'t-short'} text={`${t("catalog.aside3")}`} />
											</Link>

											<Link to={`/catalog`} onClick={closeModal}>
												<SideBarItem value={'sweatshirts'} text={`${t("catalog.aside4")}`} />
											</Link>

											<Link to={`/catalog`} onClick={closeModal}>
												<SideBarItem value={'pants'} text={`${t("catalog.aside5")}`} />
											</Link>

											<Link to={`/catalog`} onClick={closeModal}>
												<SideBarItem value={'shoes'} text={`${t("catalog.aside6")}`} />
											</Link>
										</ul>
									</div>
								</div>

							</div>
						</>
					) : ''}
				</button>
				<button onClick={openSort} className='filter__select-mobile_sort'>
					{
						state.catalog.price === 'asc' ? `${t("catalog.filter.asc")}` : (state.catalog.price === 'desc' ? `${t("catalog.filter.desc")}` : `${t("catalog.filter.sort")}`)
					}

					<AiFillCaretDown />
					{isModalOpen1 ? (
						<>
							<div className='modal2'>
								<div className='modal2__close' onClick={closeModal}  >
								</div>
								<div className='modal2__content' >
									<div className='modal__content-top'>
										<div className='modal__content-row'>
											<p className='modal__content-row_text'>{t("catalog.filter.sort")} </p>
											<div style={{
												position: 'absolute',
												right: '20px',
											}}>
												<AiOutlineClose onClick={closeModal} />
											</div>
										</div>
									</div>
									<div className='modal2__content-center'>
										<SelectPrice closeModal={closeModal} />
									</div>
								</div>

							</div>
						</>
					) : ''}
				</button>
			</div>
			<div className='filter__select'>
				<SelectPrice />
			</div>
			<div className='filter__select'>
				<SelectBrand />
			</div>

		</div>
	)
}

export default CatalogFilter