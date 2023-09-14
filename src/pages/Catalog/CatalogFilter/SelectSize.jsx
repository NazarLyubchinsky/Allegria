import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from "react";
import { CustomContext } from "../../../utils/context";
import { useTranslation } from 'react-i18next';

function SelectSize() {
	const { t } = useTranslation()
	const { state, dispatch } = useContext(CustomContext)

	const handleChange = (event) => {
		dispatch({
			type: 'change_size', payload: {
				size: event.target.value, length: state.catalog.products.data.filter((item) => {
					return event.target.value ? item.sizes.find((el) => el.size === event.target.value).inStock : item
				}).length
			}
		})
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">{t("catalog.size")}</InputLabel>
				{
					state.catalog.category === 'shoes' ?
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state.catalog.size}
							label={t("catalog.size")}
							onChange={handleChange}
						>
							<MenuItem value={38}>38</MenuItem>
							<MenuItem value={39}>39</MenuItem>
							<MenuItem value={40}>40</MenuItem>
							<MenuItem value={41}>41</MenuItem>
							<MenuItem value={42}>42</MenuItem>
							<MenuItem value=''>Сбросить</MenuItem>
						</Select>
						: state.catalog.category === 't-short' || state.catalog.category === 'sweatshirts' ?
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={state.catalog.size}
								label={t("catalog.size")}
								onChange={handleChange}
							>
								<MenuItem value='S'>S</MenuItem>
								<MenuItem value='M'>M</MenuItem>
								<MenuItem value='L'>L</MenuItem>
								<MenuItem value='XL'>XL</MenuItem>
								<MenuItem value='XXL'>XXL</MenuItem>
								<MenuItem value=''>{t("catalog.reset")}</MenuItem>
							</Select>
							: state.catalog.category === 'pants' ?
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={state.catalog.size}
									label={t("catalog.size")}
									onChange={handleChange}
								>
									<MenuItem value={34}>34</MenuItem>
									<MenuItem value={36}>36</MenuItem>
									<MenuItem value={38}>38</MenuItem>
									<MenuItem value={40}>40</MenuItem>
									<MenuItem value={42}>42</MenuItem>
									<MenuItem value=''>Сбросить</MenuItem>
								</Select> : ''
				}



			</FormControl>
		</Box>
	);
}

export default SelectSize