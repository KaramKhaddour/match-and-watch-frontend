import Validations from "./Validations";

export default class SignupValidations{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    checkValidations(){
        let errors=[];
        if(!Validations.checkEmail(this.email)){
            errors['email']='Invalid email'
        }
        if(!Validations.minLength(this.password,6)){
            errors['password']='password should at least be 6 charecters'
        }
        return errors;
    }
    static getErrorMessagesFromCode(errorCode){
        console.log(errorCode)
        if(errorCode==="EMAIL_EXISTS"){
            return "Email already exists";
        }
        else if(errorCode==="EMAIL_NOT_FOUND"){
            return "Email not found"
        }
        else if(errorCode==="INVALID_PASSWORD"){
            return "Invalid password"
        }
        else return "Unexpected error! please try again"
    }
}