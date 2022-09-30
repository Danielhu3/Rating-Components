import React from 'react'
import { Rating } from './style'

import Radio  from './radio'
import Label  from './label'
import Button  from './button'

type Props = {
  setRated: React.Dispatch<React.SetStateAction<boolean>>
}
const index = ({setRated}: Props) => {
  
  const ratingOptions = [1,2,3,4,5]
  
  return (
    <Rating onSubmit={()=> setRated(true)}>
      {ratingOptions.map((value)=><React.Fragment key={value}>
        <Radio value={value}></Radio>
        <Label value={value} ></Label>
      </React.Fragment>)}
      <Button />
    </Rating>
  )
}

export default index