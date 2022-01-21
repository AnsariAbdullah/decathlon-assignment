import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
	padding: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #c3cfd9;
	color: #293845;
	font-weight: 500;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	.logo{
		text-transform: uppercase;
	}
	.mobile-menu{
		display: none;
	}
	.navigation-menu{
		font-weight: 900;
	}
`

const NavBar = () => {

	return (
		<NavBarWrapper className='nav'>
			<p className="logo">Store</p>
			<div className="navigation-menu">
				Cart
			</div>
		</NavBarWrapper>
	);
}
 
export default NavBar;