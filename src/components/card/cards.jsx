import React from 'react';
import styled from 'styled-components';
import Start from '../../assets/star.png'

const CardWrapper = styled.div`
	border: 1px solid #c3cfd9;
	border-radius: 5px;
  padding: 10px;
	.image-wrapper {
		width: 150px;
		margin: 0 auto;
		img{
			width: 100%;
		}
	}
	.details {
    .title {
			font-size: 22px;
			font-weight: 600;
			padding: 20px 0;
			padding-bottom: 20px;
			width: 200px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 0 auto;
		}
		.desc{
			color: gray;
    	font-size: 12px;
		}
		.star-rating{
			display: flex;
    	align-items: center;
			margin-top: 10px;
			img{
				width: 19px;
				margin-right: 5px;
			}
		}
		.date {
			display: inline-block;
			padding: 10px 15px;
			background: blue;
			color: #fff;
			border-radius: 5px;
			margin-top: 10px;
			border: none;
		}
	}
	@media (max-width: 425px) {
		flex-direction: column;
	}
`


const Card = ({ title, desc, price, image, rating }) => {
	return (
		<CardWrapper>
			<div className="image-wrapper">
				<img src={image} alt={title} />
			</div>
			<div className="details">
				<p className="title">{title}</p>
				<p className="desc">{desc}</p>
				<div className="star-rating">
					<img src={Start} alt="rating" />
					{rating}
				</div>
				<button className="date">Buy: ${price}</button>
			</div>
		</CardWrapper>
	);
}
 
export default Card;