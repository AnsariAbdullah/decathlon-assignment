import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GetStoreData } from './actions/actions';
import NavBar from './components/navBar';
import Card from './components/card';
import Footer from './components/footer';

const StoreWrapper = styled.div`
`
const CardWrapper = styled.div`
	width: 1024px;
	margin: 30px auto 100px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: 768px) {
		width: 100%;
		grid-template-columns: 1fr 1fr;	
	}
	@media (max-width: 425px) {
		grid-template-columns: 1fr;	
	}
`

class App extends Component {
	componentDidMount(){
		this.props.GetStoreData()
	}
	render() { 
		// console.log('All props ==> ', this.props)
		// console.log('users reducers ==>', this.props.reducers.storeData)
		return (
			<StoreWrapper>
				<NavBar />
					<CardWrapper>
						{this.props.reducers.storeData && this.props.reducers.storeData.map(item => 
							<Card
								key={item.id}
								title={item.title}
								desc={item.description}
								price={item.price}
								image={item.image}
								rating={item.rating.rate}
							/>
						)}
					</CardWrapper>
				<Footer />
			</StoreWrapper>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => {
	return {
		GetStoreData: () => dispatch(GetStoreData())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
