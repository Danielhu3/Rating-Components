import React from 'react'
import { StarImage } from './style'
import Star from '../../images/icon-star.svg'

const index = () => {
  return (
    <StarImage>
        <img src={Star} alt='Star Icon'></img>
    </StarImage>
  )
}

export default index