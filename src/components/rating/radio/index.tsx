import React from 'react'
import { Radio } from './style'

type Props = {
    value: string;
    setRate: React.Dispatch<React.SetStateAction<string>>;
}

const index = ({value, setRate} : Props) => {
  const setRateValue = (e: React.SyntheticEvent): void =>{
    //const target = e.target as HTMLInputElement
    //console.log(target.value)
    setRate(value)
    console.log(value)
  }
  return (
    <Radio type='radio' name='rating-value' value={value} id={value}
    onChange={setRateValue}></Radio>
  )
}

export default index