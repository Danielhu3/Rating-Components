import React from 'react'
import { Button } from './style'

type Props = {
  rate: string;
  setRated: React.Dispatch<React.SetStateAction<boolean>>;
}
const index = ({rate,setRated}: Props) => {
  
  const submitRate = (e: React.SyntheticEvent)=>{
    e.preventDefault()

    if(rate !== ''){
      setRated(true)
    }

  }
  return (
    <Button type='submit' onClick={(e)=>submitRate(e)}>SUBMIT</Button>
  )
}

export default index