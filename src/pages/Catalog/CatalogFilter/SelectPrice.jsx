import React, { useContext} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomContext } from '../../../utils/context';
import { useTranslation } from 'react-i18next';

function SelectPrice() {
	const {t} = useTranslation()
	const { price, setPrice } = useContext(CustomContext)
	const handleChange = (event) => {
		setPrice(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">{t("catalog.price")}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={price}
					label={t("catalog.price")}
					onChange={handleChange}
				>
					<MenuItem value='asc'>По возростании</MenuItem>
					<MenuItem value='desc'>По убиванию</MenuItem>
					<MenuItem value=''>Сбросить</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
export default SelectPrice