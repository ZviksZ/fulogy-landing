import React          from 'react'
import {connect}      from "react-redux";
import {setPopupMode} from "../../../reducers/commonReducer.js";
import style          from '../Navbar.module.scss'


const ContactUs = ({setPopupMode}) => {
   const changeMode = () => {
      setPopupMode(true, 'form')
   }
   return (
      <div className={style.contacts}>
         <span onClick={changeMode}>Заказать звонок</span>
         <a href="+78005056533">+7-(800)-505-65-33</a>
      </div>


   )
}

let mapStateToProps = (state) => {
   return {}
}

export default connect(mapStateToProps, {setPopupMode})(ContactUs)