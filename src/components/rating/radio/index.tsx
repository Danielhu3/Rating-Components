import React from 'react'
import { Radio } from './style'

type Props = {
    value: string;
}

const index = ({value} : Props) => {
  return (
    <Radio type='radio' name='rating-value' value={value} id={value}></Radio>
  )
}

export default index