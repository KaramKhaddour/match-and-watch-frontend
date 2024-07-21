import SignupValidations from '@/services/SignupValidations';
import {AUTO_LOGIN_ACTION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION,GET_USER_REFRESH_TOKEN_GETTER} from '../../storeconstants'
import axios from 'axios';
import store from '../../store'
export default{
    async [LOGOUT_ACTION](context){
        let postData={
            refresh_token:store.getters[`auth/${GET_USER_REFRESH_TOKEN_GETTER}`] 
         };
         localStorage.removeItem('userData');
         context.commit(SET_USER_TOKEN_DATA_MUTATION,{
            authenticated:null,
            access_token:null,
            expires_in:null,
            refresh_token:null,
            refresh_token_expires_in:null,
         });
        let response='';
        try{
            response=await axios.post('http://localhost:8000/api/logout', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.detail);
            throw(errorMessage);
        }
        if(response===''){
            throw new Error('Could not complete. Please try again!') 
        }
    },
    async [LOGIN_ACTION](context,payload){
        let postData={
            email:payload.email,
            password:payload.password,
        };
        let response='';
        try{
            response=await axios.post('http://localhost:8000/api/login', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.detail);
            throw(errorMessage);
        }
        if(response===''){
            throw new Error('Could not complete. Please try again!') 
        }
        else if (response.status===200){
            let tokenData={
                authenticated:1,
                access_token:response.data.access_token,
                expires_in:response.data.expires_in,
                refresh_token:response.data.refresh_token,
                refresh_token_expires_in:response.data.refresh_token_expires_in,
            };
            console.log(response.data.access_token)
           localStorage.setItem('userData',JSON.stringify(tokenData))
           context.commit(SET_USER_TOKEN_DATA_MUTATION,tokenData)
        }
    },
    async [SIGNUP_ACTION](context,payload){
        let postData={
            name:payload.name,
            surname:payload.surname,
            email:payload.email,
            password:payload.password,
        };
        let response='';
        try{
            response=await axios.post('http://localhost:8000/api/register', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.detail);
            throw(errorMessage);
        }
        if(response===''){
            throw new Error('Could not complete. Please try again!') 
        }
        else if (response.status===200){
            let tokenData={
                authenticated:1,
                access_token:response.data.access_token,
                expires_in:response.data.expires_in,
                refresh_token:response.data.refresh_token,
                refresh_token_expires_in:response.data.refresh_token_expires_in,
            };
           localStorage.setItem('userData',JSON.stringify(tokenData))
           context.commit(SET_USER_TOKEN_DATA_MUTATION,tokenData)
        }
    },
    [AUTO_LOGIN_ACTION](context){
        let userData=localStorage.getItem('userData');
        if(userData){
            context.commit(SET_USER_TOKEN_DATA_MUTATION,JSON.parse(userData));
        }
    }

};