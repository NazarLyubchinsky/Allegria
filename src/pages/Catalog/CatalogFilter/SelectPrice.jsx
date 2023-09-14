import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomContext } from '../../../utils/context';
import { useTranslation } from 'react-i18next';

function SelectPrice({ closeModal }) {
	const { t } = useTranslation()
	const { state, dispatch } = useContext(CustomContext)
	const handleChange = (event) => {
		dispatch({ type: 'change_price', payload: event.target.value })
	};

	const handlePriceChangeMobile = (price) => {
		dispatch({ type: 'change_price', payload: price });
	};

	return (
		<>
			<Box sx={{ minWidth: 120 }} className='selectPrice'>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">{t("catalog.price")}</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={state.catalog.price}
						label={t("catalog.price")}
						onChange={handleChange}
					>
						<MenuItem value='asc'>По возростании</MenuItem>
						<MenuItem value='desc'>По убиванию</MenuItem>
						<MenuItem value=''>Сбросить</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<div className='selectPrice__mobile'>
				<p
					className='selectPrice__mobile-btn'
					onClick={(e) => {
						handlePriceChangeMobile('asc');
						closeModal(e);
					}}
				>
					По возростании
				</p>
				<p
					className='selectPrice__mobile-btn'
					onClick={(e) => {
						handlePriceChangeMobile('desc');
						closeModal(e);
					}}
				>
					По убыванию
				</p>
				<p className='selectPrice__mobile-btn'
					onClick={(e) => {
						handlePriceChangeMobile('');
						closeModal(e);
					}}
				>
					Сбросить
				</p>
			</div>
		</>
	);
}
export default SelectPrice

