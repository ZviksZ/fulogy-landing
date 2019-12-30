import React from 'react'
import s              from '../TopBanner.module.scss'
import icon1   from '../../../../public/static/assets/img/speed.svg'
import icon2   from '../../../../public/static/assets/img/policy.svg'
import icon3   from '../../../../public/static/assets/img/tap.svg'
import icon4   from '../../../../public/static/assets/img/bright-stars.svg'

export const TopBannerBottom = () => {
   return (
      <div className={s.bottomBlock}>
         <div className={s.bottomItem}>
            <img src={icon1} alt="1"/>
            <p>
               Установка под размер
               Вашей кухни за 72 часа;
            </p>
         </div>
         <div className={s.bottomItem}>
            <img src={icon2} alt="2"/>
            <p>
               Гарантия 5 лет;
            </p>
         </div>
         <div className={s.bottomItem}>
            <div className={s.thirdItem}>
               <span className={s.close}></span>
               <img src={icon3} alt="3"/>
            </div>
            
            <p>
               Бесконтактное
               управление светом;
            </p>
         </div>
         <div className={s.bottomItem}>
            <img src={icon4} alt="4"/>
            <p>
               Эксклюзивность.
            </p>
         </div>
      </div>
   )
}