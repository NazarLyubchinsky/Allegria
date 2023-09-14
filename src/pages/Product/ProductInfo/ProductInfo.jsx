import React, { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import { CustomContext } from '../../../utils/context';
import ProductTitle from '../ProductTitle';


const ProductInfo = ({ product }) => {

	const { t } = useTranslation()
	const [size, setSize] = useState('')

	const { setProductForCarts } = useContext(CustomContext)

	return (
		<div className="product__info">
			<div className='product__info-text'>
				<ProductTitle product={product} />
			</div>
			<p className="product__title-size">
				Размер
			</p>
			<ul className="product__list">
				{
					product.sizes.map((item) => (
						<li key={item.id} style={{ background: `${size === item.size ? 'black' : 'transparent'} `, color: `${size === item.size ? 'white' : 'black'} ` }} onClick={() => {
							if (item.inStock) {
								setSize(item.size)
							}
						}} className={`${item.inStock > 0 ? 'product__size' : 'product__size_null'}`}>
							{item.size}
						</li>
					))
				}
			</ul>
			<div className="product__btns">
				<div>
					<button className="product__btn product__btn_cart" onClick={() => {
						if (size.length) {
							setProductForCarts({ ...product, size })
						} else {
							alert('виберіть розмір')
						}
					}}>
						{t("product.btn1")}
					</button>
				</div>
				<div>
					<button className="product__btn product__btn_buy">
						{t("product.btn2")}
					</button>
				</div>

			</div>
		</div>
	);
};

export default ProductInfo;