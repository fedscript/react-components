import React from 'react'

/* e.g:

<Container>
  content...
</Container>

*/

const Container = (props) => {
  return <div className="grid-container">{props.children}</div>
}


export default Container
