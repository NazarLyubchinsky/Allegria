import { createContext, useReducer } from "react";
import axios from "axios";

export const CustomContext = createContext();

export const reducer = (state, action) => {
	switch (action.type) {
		case 'change_gender':
			return {
				...state,
				catalog: {
					...state.catalog,
					gender: action.payload,
					page: 1,
					brand: ''
				}
			}
		case 'change_category':
			return {
				...state,
				catalog: {
					...state.catalog,
					category: action.payload,
					size: '',
					page: 1,
					brand: ''
				}
			}
		case 'get_products':
			return {
				...state,
				catalog: {
					...state.catalog,
					products: {
						data: action.payload.data, dataLength: action.payload.length, error: action.payload.error
					}
				}
			}
		case 'catch_products':
			return {
				...state,
				catalog: {
					...state.catalog,
					products: { error: action.payload.error, dataLength: 0, data: [] }
				}
			}
		case 'get_brands':
			return {
				...state,
				catalog: {
					...state.catalog,
					brands: action.payload
				}
			}
		case 'change_brand':
			return {
				...state,
				catalog: {
					...state.catalog,
					brand: action.payload
				}
			}
		case 'change_price':
			return {
				...state,
				catalog: {
					...state.catalog,
					price: action.payload
				}
			}
		case 'change_size':
			return {
				...state,
				catalog: {
					...state.catalog,
					size: action.payload.size,
					products: {
						...state.catalog.products,
						dataLength: action.payload.length
					},
					page: 1
				}
			}
		case 'change_page':
			return {
				...state,
				catalog: {
					...state.catalog,
					page: action.payload
				}
			}
		default:
			return state
	}
}

function init(initialState) {
	return { ...initialState }
}

const Context = (props) => {

	const [state, dispatch] = useReducer(reducer, {
		catalog: {
			gender: 'woman',
			category: 't-short',
			price: '',
			page: 1,
			size: '',
			brands: [],
			brand: '',
			products: {
				data: [],
				error: '',
				dataLength: 0
			}
		},
		favorites: {}
	}, init)

	const changeGender = (value) => {
		dispatch({ type: 'change_gender', payload: value })
	}
	const changeCategory = (value) => {
		dispatch({ type: 'change_category', payload: value })
	}

	const getProducts = () => {
		axios(`http://localhost:4444/catalog?gender=${state.catalog.gender}&category=${state.catalog.category}${state.catalog.price !== '' ?
			'&_sort=price&_order=' + state.catalog.price : ''}${state.catalog.brand !== '' ? '&brand=' + state.catalog.brand : ''}`)
			.then(({ data }) => {
				dispatch({ type: 'get_products', payload: { data: data, length: data.length, error: '' } })
				axios(`http://localhost:4444/brands?category=${state.catalog.category}&gender=${state.catalog.gender}`)
					.then(({ data }) => {
						dispatch({ type: 'get_brands', payload: data[0].brand })
					})
					.catch(() => alert('Brand not found'))
			})
			.catch((error) => {
				dispatch({ type: 'catch_products', payload: { error: error } })
			})
	}

	const value = {
		dispatch,
		state,
		changeCategory,
		changeGender,
		getProducts,
	}

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}
export default Context