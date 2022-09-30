import React from 'react'
import {Card} from './styles'

type Props = {
  rated: boolean;
  children: JSX.Element
}

const index = ({rated,children} : Props) => {
  return (
    <Card rated={rated}>
      {children}
    </Card>
  )
}

export default index