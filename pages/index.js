import React       from "react";
import {connect}   from "react-redux";
import Header      from "../src/components/common/Header.jsx";
import Popup     from "../src/components/common/Popup/Popup.jsx";
import {Navbar}    from "../src/components/Navbar/Navbar.jsx";
import TopBanner from "../src/components/TopBanner/TopBanner.jsx";

const index = props => {
   return (
      <>
         {
            props.popupMode && <Popup/>
         }
         <div>
            
            <Header/>
            <Navbar/>
            <TopBanner/>
         </div>
      </>
   );
}

index.getInitialProps = ({reduxStore}) => {
   /*reduxStore.dispatch(increment()); // action will dispatched on page load*/

   const state = reduxStore.getState(); // returns redux store
   console.log(state);

   return {};
};

let mapStateToProps = (state) => {
   return {
      popupMode: state.commonReducer.popupMode
   }
}
export default connect(mapStateToProps, {})(index);
