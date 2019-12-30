import React           from 'react'
import s               from './TopBanner.module.scss'
import {TopBannerLeft} from "./TopBannerLeft/TopBannerLeft.jsx";

export const TopBanner = props => {
   return (
      <div className={s.topBanner}>
         <TopBannerLeft />
      </div>
   )
}
