import {Formik}       from "formik";
import React          from 'react'
import {connect}      from "react-redux";
import {setPopupMode} from "../../../reducers/commonReducer.js";
import s              from './PopupForm.module.scss'
import * as Yup       from "yup";
import InputMask      from 'react-input-mask';
import popupImg       from '../../../../public/static/assets/img/popup-form-img.png'
import cn             from 'classnames'

export const popupFormSchema = Yup.object().shape({
   name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
   phone: Yup.string().required('Required'),
});

const PopupForm = ({setPopupMode}) => {
   return (
      <div className={s.popupFormContainer} id="popupForm">
         <div className={s.popupFormImg}>
            <img src={popupImg} alt=""/>
         </div>
         <div className={s.popupFromWrap}>
            <span className={s.popupFormClose} onClick={() => setPopupMode(false, 'form')}></span>
            <div className={s.popupFormTitle}>
               <h3>Чтобы заказать звонок</h3>
               <span>впишите свое имя и телефон:</span>
            </div>
            <Formik
               initialValues={{
                  name: '',
                  phone: '',
                  policy: false
               }}
               validationSchema={popupFormSchema}
               onSubmit={(values, actions) => {
                  alert(values.name, values.phone)
               }}
            >
               {(props) => (
                  <form onSubmit={props.handleSubmit}>
                     <div className={s.wrap}>
                        <input
                           type="text"
                           onChange={props.handleChange}                           
                           value={props.values.name}
                           name="name"
                           placeholder="Ваше имя:"
                           className={cn({[s.errorMsg]: props.errors.name},s.textInput)}
                        />
                     </div>
                     <div className={s.wrap}>
                        <InputMask mask="+7-999-9999999"
                                   type="text"
                                   name="phone"
                                   onChange={props.handleChange}                                   
                                   className={cn({[s.errorMsg]: props.errors.name},s.textInput)}
                                   placeholder="Ваш телефон:"
                                   value={props.values.phone}
                        />
                     </div>
                     <div className={s.policyBlock}>
                        <p className={s.checkInput}>
                           <input
                              id="checkBox"
                              type="checkbox"
                              onChange={props.handleChange}                              
                              value={props.values.policy}
                              name="policy"
                           />
                           <label htmlFor="checkBox">
                              Я принимаю условия
                           </label>
                        </p>

                        <div>
                           <a href="#anch">политики конфиденциальности</a>
                        </div>
                     </div>

                     <button type="submit"
                             className={s.btnYellow}
                             disabled={!props.values.policy}>
                        Заказать звонок
                     </button>
                  </form>
               )}
            </Formik>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {}
};

export default connect(mapStateToProps, {setPopupMode})(PopupForm)