import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getReceiptItems } from '../reducers'
import Receipt from '../components/Receipt'
import classes from '../styles/app.css'

const ReceiptContainer = ({ items, total, checkout }) => (
	<Receipt 
		items={items}
		total={total}
		onCheckoutClicked={() => checkout(items)} />
)

ReceiptContainer.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})).isRequired,
	total: PropTypes.string,
	checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	items: getReceiptItems(state),
	total: getTotal(state)
})

export default connect(
	mapStateToProps,
	{ checkout }
)(ReceiptContainer)