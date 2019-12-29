import React     from 'react'
import {Logo}    from "../common/Logo.jsx";
import logoImg   from '../../../public/static/assets/img/logo.png'
import {NavList} from "./NavList/NavList.jsx";
import style     from './Navbar.module.scss'

export const Navbar = props => {
   return (
      <div className={style.navbar}>
         <Logo img={logoImg}/>         
         <NavList />
         
      </div>
   )
}