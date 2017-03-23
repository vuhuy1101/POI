import React, { PropTypes } from 'react'

const ItemsList = ({ title, children }) => (
	<div>
		<h3>{title}</h3>
		<div className="itemList">{children}</div>
	</div>
)

ItemsList.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired
}

export default ItemsList