<template>
    <div class="loginContainer">
      <div class="leftSide">
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
      <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
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

<style scoped>
.loginContainer{
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