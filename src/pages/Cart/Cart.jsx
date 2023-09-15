
import React, { useContext, useState } from 'react';
import cartImg from '../../assets/cart/cart.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CustomContext } from "../../utils/context";
import { useForm } from "react-hook-form";
import axios from "axios";

const Cart = () => {

	const {
		register,
		handleSubmit,
		formState: {
			errors
		},
		reset
	} = useForm({
		mode: "onBlur"
	})

	const [address, setAddress] = useState(false)
	const { state, deleteProductForCarts, plusProductForCarts, minusProductForCarts, dispatch } = useContext(CustomContext)
	const { t, i18n } = useTranslation()
	const [changeAddress, setChangeAddress] = useState('')
	const onSubmit = (data) => {
		if (state.carts.dataLength === 0) {
			alert('Корзина пуста. Добавьте товары в корзину перед оформлением заказа.');
		} else {
			axios.post('http://localhost:4444/orders', {
				...data,
				data: state.carts.data,
				allPrice: state.carts.data.reduce((acc, rec) => {
					return acc + rec.price * rec.count
				}, 0)
			}).then(({ data }) => {
				alert('Данные отправлены')
				reset()
				dispatch({ type: 'reset_carts' })

			}).catch((err) => alert('Данные не отправлены'))
		}
	}

	return (
		<section className="cart">
			<div className="container">
				<h2 className='cart__title'>
					{t("cart.title")}
				</h2>
				<div className='cart__block'>
					<div className='cart__left'>
						<form noValidate className="cart__form" onSubmit={handleSubmit(onSubmit)}>
							<div className='cart__form-item'>
								<div className='cart__form-list'>
									<input {...register('name', {
										required: {
											message: `${t("cart.errors.name")}`,
											value: true
										},
										minLength: {
											message: `${t("cart.errors.characters")}`,
											value: 2
										}
									})} className='cart__form-input' type="text" placeholder={t("cart.name")} />
									<span style={{ color: 'red' }}>{errors.name && errors.name?.message} </span>
								</div>

								<div className='cart__form-list'>
									<input {...register('surname', {
										required: {
											message: `${t("cart.errors.lastName")}`,
											value: true
										},
										minLength: {
											message: `${t("cart.errors.characters")}`,
											value: 2
										}
									})} className='cart__form-input' type="text" placeholder={t("cart.surname")} />
									<span style={{ color: 'red' }}>{errors.surname && errors.surname?.message}</span>
								</div>

								<div className='cart__form-list'>
									<input  {...register('email', {
										required: {
											message: `${t("cart.errors.email")}`,
											value: true
										},
										minLength: {
											message: `${t("cart.errors.emailFormat")}`,
											value: 10
										},
										pattern: {
											message: `${t("cart.errors.characters")}`,
											value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
										}
									})} className='cart__form-input' type="email" placeholder={t("cart.email")} />
									<span style={{ color: 'red' }}>{errors.email && errors.email?.message}</span>
								</div>

								<div className='cart__form-list'>
									<input {...register('phone', {
										required: true
									})} className='cart__form-input' type="tel" placeholder={t("cart.phone")} />
									<span style={{ color: 'red' }}>{errors.phone && <span>{t("cart.errors.number")}</span>}</span>
								</div>
							</div>

							<div className="cart__deli">
								<h3 className="cart__deli-title">{t("cart.delivery")}</h3>
								<div className='cart__deli-item'>
									{
										address ? <p> {changeAddress}
										</p> : <textarea {...register('address', {
											required: true
										})} value={changeAddress} onChange={(e) => setChangeAddress(e.target.value)} placeholder={t("cart.address")} className='cart__deli-area' />
									}
									<p className='cart__deli-red ' onClick={() => {
										if (!changeAddress.length && !address) {
											setAddress(false)
										} else {
											setAddress(!address)
										}
									}}>{address ? `${t("cart.edit")}` : `${t("cart.save")}`}</p>
								</div>
							</div>

							<div className='cart__pay'>
								<h3 className="cart__deli-title">{t("cart.pay")}</h3>
								<div className='cart__pay-wrapper'>
									<label className="cart__pay-label">
										<input {...register('pay', {
											required: true
										})} value='card' type="radio" name="pay" />{t("cart.payWebsite")}
									</label>
									<label className="cart__pay-label">
										<input {...register('pay', {
											required: true
										})} value='cash' type="radio" name="pay" />{t("cart.payOrder")}
									</label>
								</div>
								<span style={{ color: 'red' }}>{errors.pay && <span>{t("cart.errors.required")}</span>}</span>
							</div>
							<div className="cart__form-buttom">
								<button className="cart__form-btn" type="submit">{t("cart.order")}</button>
							</div>
						</form>
					</div>

					<div className=" cart__right">
						<div className='cart__wrapper'>
							{
								state.carts.dataLength ? state.carts.data.map((item, index) => (
									<div key={index} className="cart__card">
										<img src={item.img[0]} alt="" className="favorites__img" />
										<div className="cart__card-info">
											<h3 className='catalog__card-title'>{item.title}</h3>
											<p className='catalog__card-category'>{item.category}</p>
											<p className='catalog__card-brand'>{item.brand}</p>
											<p className='catalog__card-price'>
												{i18n.language === 'en' ? item.price : item.price * 83}
												{i18n.language === 'ua' ? ' грн.' : ' $'}
											</p>
											<p className="favorites__card-count">
												<span onClick={() => {
													if (item.count > 1) {
														minusProductForCarts(item.id, item.size)
													} else {
														deleteProductForCarts(item.id, item.size, item.count)
													}
												}}>-</span>
												{item.count}
												<span onClick={() => plusProductForCarts(item.id, item.size)}>+</span>
											</p>
										</div>
										<span className='card__card-remove' onClick={() => deleteProductForCarts(item.id, item.size, item.count)}>
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
												{t("cart.empty")}
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
						{
							state.carts.dataLength ? (
								<span>{t("cart.sum")} : {i18n.language === 'ua' ? state.carts.data.reduce((acc, rec) => {
									return acc + rec.price * rec.count
								}, 0) * 39 + ' грн' : state.carts.data.reduce((acc, rec) => {
									return acc + rec.price * rec.count
								}, 0)}</span>
							) : ''
						}

					</div>
				</div>
			</div>

		</section>
	);
};

export default Cart;