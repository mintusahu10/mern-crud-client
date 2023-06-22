import * as actionTypes from '../constants/constant';

export const GetUserdataReducer = (state={userdata:[]},action)=>{
    switch(action.type){
       
        case actionTypes.GET_USERDATA_SUCCESS :
            return{userdata:action.payload};

            case actionTypes.GET_USERDATA_FAIL :
                return{error:action.payload};

                default :
                return state
    }
} 