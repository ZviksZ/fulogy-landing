import {ErrorMessage, Field, Form, Formik} from "formik";
import React                               from 'react'
import {ButtonYellow}                      from "../ButtonYellow/ButtonYellow.jsx";
import s                                   from './PopupForm.module.scss'
import * as Yup                            from "yup";
import InputMask                           from 'react-input-mask';
import popupImg   from '../../../../public/static/assets/img/popup-form-img.png'

export const popupFormSchema = Yup.object().shape({
   name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
   phone: Yup.string().required('Required'),
});

export const PopupForm = () => {
   return (
      <div className={s.popupFormContainer} id="popupForm">
         <div className={s.popupFormImg}>
            <img src={popupImg} alt=""/>
         </div>
         <Formik
            initialValues={{
               name: '',
               phone: '',
               policy: false
            }}
            validationSchema={popupFormSchema}
            onSubmit={(values, actions) => {
               alert(values.name)
            }}
         >
            {(props) => (
               <form onSubmit={props.handleSubmit}>
                  <input
                     type="text"
                     onChange={props.handleChange}
                     onBlur={props.handleBlur}
                     value={props.values.name}
                     name="name"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                  
                  <InputMask mask="+7-999-999-99-99" 
                             type="text" 
                             name="phone"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.phone}
                  />
                  {props.errors.phone && <div id="feedback">{props.errors.phone}</div>}
                  
                  
                  <button type="submit">Submit</button>
               </form>
            )}
         </Formik>


      </div>
   )
}