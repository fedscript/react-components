import React from 'react'

/* e.g:

<Padding t="3" b="0" l="1" r="1" inline>
  content...
</Padding>

*/

const Padding = (props) => {

  const value = `
    ${props.inline && 'inline'}
    ${props.t && 'pt' + props.t}
    ${props.b && 'pb' + props.b}
    ${props.l && 'pl' + props.l}
    ${props.r && 'pr' + props.r}
    ${props.p && 'p' + props.p}
  `

  let Tag = `div`

  if(props.inline) {
    Tag = `span`
  }

  return <Tag className={value.trim()}>{props.children}</Tag>
}

Padding.defaultProps = {
  inline: '',
  t: '',
  b: '',
  l: '',
  r: '',
  p: '',
}

export default Padding
