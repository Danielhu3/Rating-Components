import React from 'react'
import { Title } from './style'

type Props ={
  children: string;
}
const index = ({children}: Props) => {
  return (
    <Title>{children}</Title>
  )
}

export default index