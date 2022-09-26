import React from 'react'
import { Label } from './style'

type Props = {
    value: number;
}

const index = ({value} : Props) => {
  return (
    <Label htmlFor={value.toString()}>{value}</Label>
  )
}

export default index