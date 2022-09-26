import React from 'react'
import { Radio } from './style'

type Props = {
    value: number;
}

const index = ({value} : Props) => {
  return (
    <Radio type='radio' name='rating-value' value={value} id={value.toString()}></Radio>
  )
}

export default index