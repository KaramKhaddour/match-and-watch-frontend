import SignupValidations from '@/services/SignupValidations';
import {LOGIN_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION} from '../../storeconstants'
import axios from 'axios';
export default{
    async [LOGIN_ACTION](context,payload){
        let postData={
            email:payload.email,
            password:payload.password,
        };
        let response='';
        try{
            response=await axios.post('http://localhost:8000/api/login', postData,);
        }catch(err){
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.error.errors[0].message);
            throw(errorMessage);
        }
        if (response.status===200){
            context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                token:response.data.token,
            })
            
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
            let errorMessage=SignupValidations.getErrorMessagesFromCode(err.response.data.error.errors[0].message);
            throw(errorMessage);
        }
        if (response.status===200){
            context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                token:response.data.token,
            })
        }
    },
};