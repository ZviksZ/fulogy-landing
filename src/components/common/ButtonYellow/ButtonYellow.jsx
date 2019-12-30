import React from 'react'
import s     from './ButtonYellow.module.scss'

export const ButtonYellow = ({text, link}) => (
   <a href={link} className={s.btnYellow}>{text}</a>
)
