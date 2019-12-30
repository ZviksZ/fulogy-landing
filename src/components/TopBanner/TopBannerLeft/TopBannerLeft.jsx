import React          from 'react'
import {ButtonYellow} from "../../common/ButtonYellow/ButtonYellow.jsx";
import s              from '../TopBanner.module.scss'
import playerImg   from '../../../../public/static/assets/img/player_bg.png'
import playerSymbol   from '../../../../public/static/assets/img/media-play-symbol.svg'

export const TopBannerLeft = ({setPopupMode}) => {
   const handleClick = (e) => {
      e.preventDefault()
      setPopupMode(true, 'video')
   }
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
            <p>
               <span>Посмотрите</span> видеопрезентацию
               о наших светильниках!
            </p>
            
           
            <a href="/" onClick={handleClick}>
               <img src={playerImg} alt="1"/>
               <img src={playerSymbol} alt="2" className={s.videoSvg}/>
            </a>
         </div>
         <ButtonYellow text={"Онлайн конструктор"} link={"/"}/>
      </div>

   )
}