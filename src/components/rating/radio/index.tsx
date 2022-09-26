import React from 'react'
import { Radio } from './style'

type Props = {
    value: String;

}

const index = ({value} : Props) => {
  return (
    <Radio type='radio' name='rating-value'></Radio>
  )
}

export default index