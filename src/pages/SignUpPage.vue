<template>
    <div class="signupContainer">
        <div class="leftSide">
            <div>
                <h3>
                    Sign Up
                </h3>
            </div>
            <div>
                <form @submit.prevent="onSignUp()">
                    <div class="form-group">
                        <label>first name</label>
                        <input type="text" class="form-control" v-model="firstName">
                    </div>
                    <div class="form-group">
                        <label>last name</label>
                        <input type="text" class="form-control" v-model="lastName">
                    </div>
                    <div class="alert alert-danger" v-if="error">
                        {{ error }}
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="email">
                        <div class="error" v-if="errors.email">{{ errors.email}}</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                        <div class="error" v-if="errors.password">{{ errors.password}}</div>
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <p>If you have an account you can <a href="/login">
                        Login
            </a></p>
        </div>
        <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
        </div>
    </div>
</template>

<script>
import { SIGNUP_ACTION } from '../store/storeconstants';
import { mapActions } from 'vuex';
import SignupValidations from '../services/SignupValidations'
export default{
    data(){
        return{
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            errors:[],
            error:'',
        }
    },
    methods:{
        ...mapActions('auth',{
            signup:SIGNUP_ACTION,
        }),
        onSignUp(){
          let validations=new SignupValidations(this.email,this.password);
          this.errors=validations.checkValidations();
          if('email' in this.errors || 'password' in this.errors){
            return false;
          }
          
          this.signup({email:this.email, password: this.password, firstName:this.firstName, lastName:this.lastName}).catch(
            error =>{
                this.error=error;
            }
          );
          this.$router.push('/profile')
        },
    },
};
</script>

<style scoped>
.signupContainer{
    height: 100rem;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
}
.leftSide{
    height: 100%;
    width: 50%;
    margin-top: 250px;
    margin-left: 150px;
    margin-right: 0px; 
    display: block;
}
.rightSide{
    background: black;
    height: 100%;
    width:50%;
}
.matchWatchExpanded{
   width:550px;
   margin-top: 320px;
   margin-left:260px;
}
input{
    width:550px;
}
button{
    color:white;
    background:black;
    border-color: black;
}
button:hover{
   background:rgb(56, 55, 55)
}
</style>