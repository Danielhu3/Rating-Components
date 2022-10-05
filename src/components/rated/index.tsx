import React from 'react'
import { Rated } from './style'

type Props ={
  rate: string;
}
const index = ({rate}: Props) => {
  return (
    <Rated>You selected {rate} out of 5</Rated>
  )
}

export default index