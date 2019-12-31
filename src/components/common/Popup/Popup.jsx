import React          from 'react'
import {connect}      from "react-redux";
import {setPopupMode} from "../../../reducers/commonReducer.js";
import PopupForm      from "../PopupForm/PopupForm.jsx";
import s              from './Popup.module.scss'

const Popup = ({type, setPopupMode}) => {
   const handleClick = (e) => {
      if (e.target.id === 'popupOverlay') {
         setPopupMode(false, 'video')
      }
   }
   return (
      <div className={s.overlay} onClick={handleClick} id="popupOverlay">
         <div className={s.wrap}>

         </div>
         {
            type === 'form'
               ? <PopupForm/>
               : <iframe width="560" height="315" src="https://www.youtube.com/embed/WxBXcKXHOdU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen/>
         }
      </div>
   )
}

const mapStateToProps = (state) => {
   return {type: state.commonReducer.popupType}
};

export default connect(mapStateToProps, {setPopupMode})(Popup)