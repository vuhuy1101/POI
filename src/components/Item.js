import React, { PropTypes } from 'react'
import ItemDetail from './ItemDetail'
import classes from '../styles/app.css'
import drinkImg from '../assets/drink1.png'

const Item = ({ item, onAddToReceiptClicked }) => (
	<div className="items">
		<div className="item-context">
			<img src={drinkImg} />
			<ItemDetail 
				name={item.name}
				price={item.price}
			/>
			<div className="item-button">
				<button className="add-btn"
					onClick={onAddToReceiptClicked}
				><span>Add</span></button>
			</div>
		</div>
	</div>
)

Item.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired,
	onAddToReceiptClicked: PropTypes.func.isRequired
}

export default Item