import React from 'react'
import { IllustrationImage } from './style'
import Illustration from '../../images/illustration-thank-you.svg'

const index = () => {
  return (
    <IllustrationImage>
        <img src={Illustration} alt='Thank you Illustration'></img>
    </IllustrationImage>
  )
}

export default index