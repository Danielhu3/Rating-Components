import React from 'react'
import { Rating } from './style'

import Radio  from './radio'
import Label  from './label'
const index = () => {

  const ratingOptions = [1,2,3,4,5]
  return (
    <Rating>
      {ratingOptions.map((value)=><React.Fragment key={value}>
        <Radio value={value}></Radio>
        <Label value={value} ></Label>
      </React.Fragment>)}
    </Rating>
  )
}

export default index