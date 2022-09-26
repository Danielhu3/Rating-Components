import React from 'react'
import { Label } from './style'

type Props = {
    value: string;
}

const index = ({value} : Props) => {
  return (
    <Label htmlFor={value}>{value}</Label>
  )
}

export default index