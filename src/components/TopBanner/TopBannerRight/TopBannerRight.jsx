import React, {useState} from 'react'
import s                 from '../TopBanner.module.scss'
import rightBg           from '../../../../public/static/assets/img/top-worker.png'
import color1            from '../../../../public/static/assets/img/top-colors/color-1.png'
import color2            from '../../../../public/static/assets/img/top-colors/color-2.png'
import color3            from '../../../../public/static/assets/img/top-colors/color-3.png'
import color4            from '../../../../public/static/assets/img/top-colors/color-4.png'

const colorsImages = [color1, color2, color3, color4]

export const TopBannerRight = () => {
   const [activeColor, setActiveColor] = useState(colorsImages[0])
   
   const changeColorHandler = (e) => {
      setActiveColor(colorsImages[e.target.id])
   }

   return (
      <div className={s.topBannerRight}>
         <div className={s.topBannerRightBg}>
            <img src={rightBg} alt=""/>
         </div>

         <div className={s.changeColor}>
            <span>Выберите цвет светильника</span>
            <ul>
               {
                  colorsImages.map((c, index) => <li key={index + colorsImages.length}
                                                     id={index}
                                                     onClick={changeColorHandler} />)
               }
            </ul>
         </div>

         <div className={s.colorImg}>
            <img src={activeColor} alt=""/>
         </div>
      </div>
   )
}