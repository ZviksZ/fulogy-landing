const SET_POPUP_MODE = 'fulogy/common/SET_POPUP_MODE';

let initialState = {
   popupMode: false,
   popupType: 'form'
};

export const commonReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_POPUP_MODE:
         return {
            ...state,
            popupMode: action.mode,
            popupType: action.popupType
         }      
      default:
         return state;
   }
}

export const setPopupMode = (mode, popupType) => ({type: SET_POPUP_MODE, mode, popupType})



