import React             from 'react'
import {connect}         from "react-redux";
import {setPopupMode}    from "../../reducers/commonReducer.js";
import s                 from './TopBanner.module.scss'
import {TopBannerBottom} from "./TopBannerBottom/TopBannerBottom.jsx";
import {TopBannerLeft}   from "./TopBannerLeft/TopBannerLeft.jsx";
import {TopBannerRight}  from "./TopBannerRight/TopBannerRight.jsx";

const TopBanner = ({setPopupMode}) => {
   return (
      <div className={s.topBanner}>
         <TopBannerLeft setPopupMode={setPopupMode}/>
         <TopBannerRight/>
         
         <TopBannerBottom/>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {  }
};

export default connect(mapStateToProps, {setPopupMode})(TopBanner)
