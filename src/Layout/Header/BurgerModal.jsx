import React from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavigateList from './NavigateList';



const BurgerModal = ({ closeModal, handleButtonClick, isModalOpen }) => {

	return (
		<>
			<div className='modal_button_container'>
				{
					!isModalOpen ? (
						<div className='open_modal_button' onClick={handleButtonClick}>
							<MenuIcon />
						</div>
					) : (
						<div onClick={closeModal}>
							<CloseIcon />
						</div>
					)
				}

				{isModalOpen && (
					<>
						<div className='modal_overlay' onClick={closeModal}>
						</div>
						<div className='modal_content'>
							<section className='sidebar' >
								{/* <span className='close_modal_button' onClick={closeModal}>
									&times;
								</span> */}
								<nav className='nav'>
									<ul className='menu'>
										<li >
											<NavLink
												className={({ isActive }) =>
													`$'link} ${isActive ? 'active' : ''}`
												}
												onClick={closeModal}
											>
											</NavLink>
										</li>
									</ul>

									<NavigateList closeModal={closeModal} />
								</nav>
							</section >

						</div>
					</>
				)}
			</div>
		</>
	)
}

export default BurgerModal