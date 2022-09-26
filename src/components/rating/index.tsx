import React from 'react'
import { Rating } from './style'

import Radio  from './radio'
import Label  from './label'
const index = () => {
  return (
    <Rating>
        <Label value='1' />
        <Radio value='1' />

        <Label value='2' />
        <Radio value='2' />
        
        <Label value='3' />
        <Radio value='3' />

        <Label value='4' />
        <Radio value='4' />

        <Label value='5' />
        <Radio value='5' />
        
        
       
    </Rating>
  )
}

export default index