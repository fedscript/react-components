import React from 'react'

/* e.g:

<Grid util="grid-margin-x">
  content...
</Grid>

*/

const Grid = (props) => {

  let value = `grid-x ${props.util && props.util}`
  
  return <div className={value.trim()}>{props.children}</div>
}

Grid.defaultProps = {
  util: '',
}

export default Grid
