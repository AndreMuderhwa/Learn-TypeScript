import React, { ReactElement } from 'react'

type propsHeading = {title: string}
const Heading = ({title}:propsHeading): ReactElement => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading