<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
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
          this.$router.push('/quiz')
        },
    },
};
</script>