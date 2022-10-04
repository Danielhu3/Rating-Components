import React from 'react'
import { Text } from './style'

type Props ={
  children: string;
  rated: boolean;
}
const index = ({children, rated} : Props) => {
  return (
    <Text rated={rated}>{children}</Text>
  )
}

export default index