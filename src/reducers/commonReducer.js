const INITIALIZED_SUCCESS = 'fulogy/common/INITIALIZED_SUCCESS';

let initialState = {
   
};

export const commonReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         }      
      default:
         return state;
   }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(setAuthUserDataThunk());
   promise.then(() => {
      dispatch(initializedSuccess());
   })
}

