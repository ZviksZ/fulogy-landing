import Link  from "next/link.js";
import React from 'react'
import style from '../Navbar.module.scss'


export const NavList = props => {
   return (
      <ul className={style.navList}>
         <li>
            <Link href="/">
               <a>Главная</a>
            </Link>
         </li>
         <li>
            <Link href="#cost">
               <a>Стоимость</a>
            </Link>            
         </li>
         <li>
            <Link href="#constructor">
               <a>Онлайн конструктор</a>
            </Link>
         </li>
         <li>
            <Link href="#why">
               <a>Почему мы</a>
            </Link>
         </li>
         <li>
            <Link href="#reviews">
               <a>Отзывы</a>
            </Link>
         </li>
      </ul>
   )
}