import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/context'
import SideBarItem from './SideBarItem'

const SideBar = () => {

	const { gender, category, changeCategory, changeGender, } = useContext(CustomContext)
	return (
		<aside className='sidebar'>
			<div className='sideBar__lang'>
				<p onClick={()=> changeGender("women") } className={`sideBar__lang-item ${gender === 'women' ? "active" : ''}`}>Жінки</p>
				<p onClick={()=> changeGender("men") } className={`sideBar__lang-item ${gender === 'men' ? "active" : ''}`}>мужики</p>
			</div>
			<ul className='sideBar__menu'>
				<SideBarItem value={'t-short'} text={'Футболки'}/>
				<SideBarItem value={'sweatshirt'} text={'Кофти'}/>
				<SideBarItem value={'pants'} text={'Штани'}/>
				<SideBarItem value={'shoes'} text={'Взуття'}/>
				
			</ul>
		</aside>

	)
}

export default SideBar