import React from 'react';
import Cell from './Cell';
import '../styles/CellContainer.css'

const CellContainer = (props) => {
  const { numCells, colors } = props;

  const cells = Array.from({ length: numCells }).map(
    (item, index) => <Cell key={index} colors={colors} />
  )

  return (
    <div className='cell-container'>
      {cells}
    </div>
  )
}

CellContainer.defaultProps = {
  colors: ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'],
  numCells: 100
}

export default CellContainer;

