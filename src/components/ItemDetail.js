import React, { PropTypes } from 'react'
import classes from '../styles/app.css'

const ItemDetail = ({ price, quantity, name }) => (
	<div>
		{name} <br/> &#36;{price}{quantity ? ` x ${quantity}` : null}
	</div>
)

ItemDetail.propTypes = {
	price: PropTypes.number,
	name: PropTypes.string
}

export default ItemDetail