import React          from 'react'
import {ButtonYellow} from "../../common/ButtonYellow/ButtonYellow.jsx";
import s              from '../TopBanner.module.scss'

export const TopBannerLeft = () => {
   return (
      <div className={s.topBannerLeft}>
         <h1>
            Премиальные сенсорные
            светильники для кухни
         </h1>
         <p className={s.subtitle}>
            <span>8 лет</span> оснащаем Ваши кухни нашими светильниками
            по цене производителя.
         </p>
         <div className={s.video}>
            <span>Посмотрите </span>видеопрезентацию
            о наших светильниках!
           
            <a href="/">Video</a>
         </div>
         <ButtonYellow text={"Онлайн конструктор"} link={"/"}/>
      </div>

   )
}