import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/context'

const SideBarItem = ({ text, value }) => {
	const { category, changeCategory } = useContext(CustomContext)
	return (
		<li onClick={() => changeCategory(value)} className={`sideBar__menu-item ${category === value ? 'active' : ""}`}>{text}</li>

	)
}

export default SideBarItem