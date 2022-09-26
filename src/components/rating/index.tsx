import React from 'react'
import { Rating } from './style'

import Radio  from './radio'
import Label  from './label'
const index = () => {

  const ratingOptions = [1,2,3,4,5]
  return (
    <Rating>
      {ratingOptions.map((value)=><>
        <Label value={value}></Label>
        <Radio value={value}></Radio>
      </>)}

    </Rating>
  )
}

export default index