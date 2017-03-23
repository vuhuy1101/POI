import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToReceipt } from '../actions'
import { getVisibleItems } from '../reducers/items'
import Item from '../components/Item'
import ItemsList from '../components/ItemsList'
import classes from '../styles/app.css'

const ItemsContainer = ({ items, addToReceipt }) => (
	<ItemsList title="Items" className="itemList">
		{ items.map(item => 
			<Item
				key={item.id}
				item={item}
				onAddToReceiptClicked={() => addToReceipt(item.id)}
			/>
		)}
	</ItemsList>
)

ItemsContainer.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})).isRequired,
	addToReceipt: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	items: getVisibleItems(state.items)
})

export default connect(
	mapStateToProps,
	{ addToReceipt }
)(ItemsContainer)