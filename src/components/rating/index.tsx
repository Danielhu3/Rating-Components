import React from 'react'
import { Rating } from './style'

import Radio  from './radio'
import Label  from './label'
import Button  from './button'

type Props = {
  setRated: React.Dispatch<React.SetStateAction<boolean>>;
  setRate: React.Dispatch<React.SetStateAction<string>>;
  rate: string;
}
const index = ({setRated, setRate, rate}: Props) => {
  
  const ratingOptions = ['1','2','3','4','5']
  
  return (
    <Rating>
      {ratingOptions.map((value)=><React.Fragment key={value}>
        <Radio value={value} setRate={setRate}></Radio>
        <Label value={value} ></Label>
      </React.Fragment>)}
      <Button rate={rate} setRated={setRated}/>
    </Rating>
  )
}

export default index