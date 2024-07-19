<template>
    <div class="loginContainer">
        <div class="imagesContainer">
            <img src="../assets/images/newDesginBackground/$_57.jpeg">
            <img src="../assets/images/newDesginBackground/3ba32041615387.57acc4bf0b15f.jpg">
            <img src="../assets/images/newDesginBackground/4-4127_avengers_endgame_movie_poster_web.jpg">
            <img src="../assets/images/newDesginBackground/61ljrN7zmoL._AC_UF894,1000_QL80_.jpg">
            <img src="../assets/images/newDesginBackground/71M8YFEakfL._AC_UF894,1000_QL80_.jpg">
            <img src="../assets/images/newDesginBackground/81U0-cRG34S._AC_UF894,1000_QL80_.jpg">
            <img src="../assets/images/newDesginBackground/DE_1899S1_Main_Vertical_27x40_RGB_PRE.jpg">
            <img src="../assets/images/newDesginBackground/Eyizh9ZU4AMPelM.avif">
            <img src="../assets/images/newDesginBackground/Glow-Season-1-One-Sheet-Poster-Print-22-x-34_db8f4b67-da32-4b2b-b46f-b85c80a585c0.2363af5d231b52395b4ac40af3549ada.webp">
            <img src="../assets/images/newDesginBackground/harry-potter-and-the-deadly-hallows-i133035.jpg">
            <img src="../assets/images/newDesginBackground/i8szyqqin2o71.webp">
            <img src="../assets/images/newDesginBackground/large-m0156-thor-love-and-thunder-poster-12-x-18-inch-300-gsm-original-imagfzkdahxdsg3h.webp">
            <img src="../assets/images/newDesginBackground/Money_Heist_Korea_Denver_Poster_EN.webp">
            <img src="../assets/images/newDesginBackground/MV5BMDBiZmI1OGItNTNhOS00NTc4LTk4MzItNWFjYjEzODFkYjg3XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg">
            <img src="../assets/images/newDesginBackground/s-l1600.jpg">
            <img src="../assets/images/newDesginBackground/xciwhezc8y9y.jpg">
            <img src="../assets/images/newDesginBackground/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg">
            <img src="../assets/images/newDesginBackground/unnamed.jpg">
            <img src="../assets/images/newDesginBackground/unnamed (1).jpg">
            <img src="../assets/images/newDesginBackground/s-l1600.jpg">            
            <img src="../assets/images/newDesginBackground/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg">            
            <img src="../assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg">            
            <img src="../assets/images/newDesginBackground/s-l1600.jpg">            
            <img src="../assets/images/newDesginBackground/i8szyqqin2o71.webp">
            <img src="../assets/images/newDesginBackground/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg">
            <img src="../assets/images/newDesginBackground/s-l1600.jpg">            
            <img src="../assets/images/newDesginBackground/Money_Heist_Korea_Denver_Poster_EN.webp">
            <img src="../assets/images/newDesginBackground/MV5BMDBiZmI1OGItNTNhOS00NTc4LTk4MzItNWFjYjEzODFkYjg3XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg">
            <img src="../assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg">
            <img src="../assets/images/newDesginBackground/s-l1600.jpg">
        </div>
      <div class="loginForm">
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
                        <button type="submit" class="btn btn-primary" id="loginButton">
                            Login
                        </button>
                    </div>
                    <p>If you don't have an account you can <a href="/signup">
                        Sign up
                    </a ></p>
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
        async onLogin(){
          let validations=new SignupValidations(this.email,this.password);
          this.errors=validations.checkValidations();
          if('email' in this.errors || 'password' in this.errors){
            return false;
          }
          await this.login({ email: this.email, password: this.password}).then(() => {
             if (this.error === '') {
                 this.$router.push('/quiz');
             }
          }).catch(error => {
             console.log("Error caught:", error);
             this.error = error;
          });
        },
    },
};
</script>

<style scoped>
.loginContainer{
    height:110vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;

    background-image: radial-gradient(
        #8C45FF,
      black
   );
}
.loginForm{
    position:absolute;
    z-index: 600;
    margin-left:35%;
    width: 500px;
    margin-top: 200px;
    border: solid white 1px;
    border-radius: 20px;
    color: white;
    height: 450px;
    padding:20px;
    background-image: radial-gradient(#23123f,black);
    opacity: 0.8;
}

img{
    height: 200px;
    width: 150px;
    margin: 15px;
    border-radius: 20px;
}
.imagesContainer{
    opacity: 0.7;
    margin-left: 100px;
    margin-right: 30px;
   margin-bottom: 100px;
   margin-top: 70px;
}
#loginButton{
    background-image:linear-gradient(rgb(59, 4, 59), black)
}
input{
    background-image:linear-gradient(rgb(49, 30, 54),rgb(10, 5, 10),black);
    opacity: 1;
}
.form-control{
    color: white;
}
a{
    text-decoration: none;
    color:rgb(119, 44, 204);
}
</style>