import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle'
import { CustomContext } from '../../utils/context'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogRow from './CatalogRow/CatalogRow'
import SideBar from './SideBar/SideBar'

const Catalog = () => {
	const { getProducts, state } = useContext(CustomContext)

	useEffect(() => {
		getProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.catalog.gender, state.catalog.category, state.catalog.price, state.catalog.brand])
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

						<CatalogFilter />
						<CatalogRow />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog