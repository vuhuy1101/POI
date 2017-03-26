import React from 'react'
import TableContainer from './TableContainer'
import ItemsContainer from './ItemsContainer'
import ReceiptContainer from './ReceiptContainer'

const App = () => (
  <div>
    <h2>Point of Sales</h2>
    <TableContainer />
    <hr/>
    <ItemsContainer />
    <ReceiptContainer />
  </div> 
)

export default App