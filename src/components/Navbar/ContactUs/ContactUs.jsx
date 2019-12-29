import React     from 'react'
import {connect} from "react-redux";
import style     from '../Navbar.module.scss'


const ContactUs = ({}) => {
   return (
      <div className={style.contacts}>
         <span>Заказать звонок</span>
         <a href="+78005056533">+7-(800)-505-65-33</a>
      </div>


   )
}

let mapStateToProps = (state) => {
   return {}
}

export default connect(mapStateToProps, {})(ContactUs)