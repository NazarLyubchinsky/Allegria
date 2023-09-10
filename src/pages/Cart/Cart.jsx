import React, { useContext } from 'react';
import cartImg from '../../assets/cart/cart.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CustomContext } from "../../utils/context";

const Cart = () => {

	const { state, deleteProductForCarts } = useContext(CustomContext)
	const { t, i18n } = useTranslation()

	return (
		<section className="cart">
			<div className="container-small">

				<div className="favorites__row">
					{
						state.carts.dataLength ? state.carts.data.map(item => (
							<div className="favorites__card">
								<img src={item.img[0]} alt="" className="favorites__img" />

								<div className="favorites__card-info">
									<h3 className='catalog__card-title'>{item.title}</h3>
									<p className='catalog__card-category'>{item.category}</p>
									<p className='catalog__card-brand'>{item.brand}</p>
									<p className='catalog__card-price'>
										{i18n.language === 'en' ? item.price : item.price * 83}
										{i18n.language === 'ru' ? ' руб.' : ' $'}
									</p>
									<p className="favorites__card-count">
										<span>-</span>
										{item.count}
										<span>+</span>
									</p>
								</div>

								<span className='favorites__card-remove' onClick={() => deleteProductForCarts(item.id, item.size, item.count)}>
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L21 21" stroke="#0F303F" />
										<path d="M21 1L0.999999 21" stroke="#0F303F" />
									</svg>
								</span>
							</div>))
							:
							<>
								<div className="cart__content">
									<h2 className="cart__title">
										{t("cart.title")}
									</h2>
									<img src={cartImg} alt="" className="cart__img" />
									<p className="cart__text" dangerouslySetInnerHTML={{ __html: t("cart.text") }} />
									<Link to={'/catalog'}>
										<button className="cart__btn" type={"button"} >
											{t("cart.btn")}
										</button>
									</Link>
								</div>
							</>
					}
				</div>
			</div>
		</section>
	);
};

export default Cart;