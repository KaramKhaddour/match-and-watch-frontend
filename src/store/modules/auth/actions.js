import SignupValidations from '@/services/SignupValidations';
import {LOGIN_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION} from '../../storeconstants'
import axios from 'axios';
export default{
    async [LOGIN_ACTION](context,payload){
        let postData={
            email:payload.email,
            password:payload.password,
            returnSecureToken:true,
        };
        let response='';
        try{
            response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYelCSOzdxK9xBQShIxC5XSHA8phT-7rA', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.error.errors[0].message);
            throw(errorMessage);
        }
        if (response.status===200){
            context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                email:response.data.email,
                token:response.data.idToken,
                expiresIn:response.data.expiresIn,
                refreshToken:response.data.refreshToken,
                userId:response.data.localId,
            })
            
        }
    },
    async [SIGNUP_ACTION](context,payload){
        let postData={
            email:payload.email,
            password:payload.password,
            returnSecureToken:true,
        };
        let response='';
        try{
            response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYelCSOzdxK9xBQShIxC5XSHA8phT-7rA', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.error.errors[0].message);
            throw(errorMessage);
        }
        if (response.status===200){
            context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                email:response.data.email,
                token:response.data.idToken,
                expiresIn:response.data.expiresIn,
                refreshToken:response.data.refreshToken,
                userId:response.data.localId,
            })
        }
    },
};