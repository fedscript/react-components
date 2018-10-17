import React from 'react'

/* e.g:

<Cell size="auto">
  content...
</Cell>

*/

const Cell = (props) => {

  let value = `cell ${props.size && props.size}`

  return <div className={value.trim()}>{props.children}</div>
}

Cell.defaultProps = {
  size: '',
}

export default Cell
