import React from 'react'
import { Image } from './style'
import Star from '../../images/icon-star.svg'
import Illustration from '../../images/illustration-thank-you.svg'

type Props = {
  rated: boolean
}

const index = ({rated} : Props) => {
  return (
    <Image>
        <img src={!rated ? Star : Illustration} alt={`${!rated ? 'Star Icon': 'Thank you Illustration'}`}></img>
    </Image>
  )
}

export default index