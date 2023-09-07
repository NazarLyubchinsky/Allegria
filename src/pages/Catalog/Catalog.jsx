import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle'
import { CustomContext } from '../../utils/context'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import CatalogRow from './CatalogRow/CatalogRow'
import SideBar from './SideBar/SideBar'

const Catalog = () => {
	const {Category, getProducts } = useContext(CustomContext)

	useEffect(() => {
getProducts()
	}, [])
	return (
		<section className='catalog'>
			<div className='container'>
				<BreadCrumbs />
				<div className='catalog__content'>
					<SideBar />
					<div className='catalog__right'>
						<h2 className='catalog__content-title'>
							<CategoryTitle />
						</h2>
						<CatalogRow />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog