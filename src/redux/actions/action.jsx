import * as actionTypes from '../constants/constant';
import axios from 'axios';
const URL ="http://localhost:8000";
let token =  localStorage.getItem('myData');
export const getalluserdetail =()=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/all`,{
            headers: {
            authorization: `${token}`
        }});
        dispatch({type:actionTypes.GET_USERDATA_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:actionTypes.GET_USERDATA_FAIL , payload:error.message});
    }
} 