import React            from 'react'
import s                from './TopBanner.module.scss'
import {TopBannerLeft}  from "./TopBannerLeft/TopBannerLeft.jsx";
import {TopBannerRight} from "./TopBannerRight/TopBannerRight.jsx";

export const TopBanner = props => {
   return (
      <div className={s.topBanner}>
         <TopBannerLeft />
         <TopBannerRight/>
      </div>
   )
}
