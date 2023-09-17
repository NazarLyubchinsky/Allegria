import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../Catalog/BreadCrumbs/BreadCrumbs'
import ProductInfo from './ProductInfo/ProductInfo'
import ProductSlide from './ProductSlide/ProductSlide'
import ProductTitle from './ProductTitle'

const Product = () => {

	const [product, setProduct] = useState({})

	const params = useParams()
// if you want more products download the repository and use http://localhost:4444
// const  localhst = 'http://localhost:4444'

// and  https://my-json-server.typicode.com/NazarLyubchinsky/json-server
const  jsonServer = 'https://my-json-server.typicode.com/NazarLyubchinsky/json-server' 
	useEffect(() => {
		axios(`${jsonServer}/catalog/${params.id}`)
			.then(({ data }) => setProduct(data))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (JSON.stringify(product) === '{}') {
		return <h2>...loading</h2>
	}
	return (
		<section className="product">
			<div className="container">
				<BreadCrumbs />
			</div>
			<div className="container-small">
				<div className="product__text">
					<ProductTitle product={product} />
				</div>
				<div className="product__row">
					<ProductSlide product={product} />
					<ProductInfo product={product} />
				</div>
			</div>

		</section>
	)
}

export default Product