import React, { PropTypes } from 'react'
import classes from '../styles/app.css'

const ItemOnReceipt = ({ price, quantity, name }) => (
	<tr><td>{name}</td><td>&#36;{price}</td><td>{quantity ? ` x ${quantity}` : null}</td></tr>
)

ItemOnReceipt.propTypes = {
	price: PropTypes.number,
	name: PropTypes.string
}

export default ItemOnReceipt