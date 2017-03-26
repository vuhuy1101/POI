import React, { PropTypes } from 'react'
import ItemOnReceipt from './ItemOnReceipt'

const Receipt = ({ items, total, onCheckoutClicked, onSaveClicked }) => {
	const hasItems = items.length > 0
	const node = hasItems ? (
		items.map(item =>
			<ItemOnReceipt
				name={item.name}
				price={item.price}
				quantity={item.quantity}
				key={item.id}
			/>
		)
	) : (
		<tr></tr>
	)

	return (
		<div className="receiptContainer">
			<div className="receiptHeader">
				<h2>RECEIPT</h2>
				<div>
					<table className="receiptContent">
						<tbody>
						{node}
						</tbody>
					</table>
				</div>
			</div>
			<div className="newline"></div>
			<div className="receiptFooter">
				<div className="total">
				<p>
					<span className="total-left">Total:</span>
					<span className="total-right">&#36; {total}</span>
				</p>
				</div>
				<div className="checkout">
					<button 
						className="checkout-btn" 
						onClick={onCheckoutClicked}
						disabled={hasItems ? '' : 'disabled'}
					>CHECKOUT</button>
				</div>
			</div>
		</div>
	)
}

Receipt.propTypes = {
	items: PropTypes.array,
	total: PropTypes.string,
	onCheckoutClicked: PropTypes.func
}

export default Receipt