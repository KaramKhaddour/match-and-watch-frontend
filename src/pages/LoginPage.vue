<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <h3>
                    Login
                </h3>
            </div>
            <div>
                <form @submit.prevent="onLogin()">
                    <div class="alert alert-danger" v-if="error">
                        {{ error }}
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model.trim="email">
                        <div class="error" v-if="errors.email">{{ errors.email}}</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model.trim="password">
                        <div class="error" v-if="errors.password">{{ errors.password}}</div>
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p>If you don't have an account you can <a href="/signup">
                        Sign up
                    </a></p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SignupValidations from '../services/SignupValidations'
import { mapActions } from 'vuex';
import { LOGIN_ACTION } from '@/store/storeconstants';

export default{
    data(){
        return{
            email:'',
            password:'',
            errors:[],
            error:'',
        }
    },
    methods:{
        ...mapActions('auth',{
            login:LOGIN_ACTION,
        }),
        onLogin(){
          let validations=new SignupValidations(this.email,this.password);
          this.errors=validations.checkValidations();
          if('email' in this.errors || 'password' in this.errors){
            return false;
          }
          this.login({email:this.email, password: this.password,}).catch(
            error =>{
                this.error=error;
            }
          );
          this.$router.push('/quiz')
        },
    },
};
</script>