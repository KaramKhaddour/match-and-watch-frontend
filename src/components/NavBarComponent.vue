<template>
  <header class="header">
    <a href="/" class="logo">
       <img src="../assets/images/logoPlaceholder_purple.png" alt="logo">
    </a>
    <nav class="navbar">
       <div class="navPart">
          <a  href="/quiz" class="match">
              +Match
          </a>
       </div>
       <div class="navPart">
          <a href="/history" class="history">
            History
        </a>
       </div>
       <div class="navPart">
           <a>About</a>
      </div>
      <div class="navPart">
          <a class="series">
            Contact
        </a>
      </div>
    </nav>
    
    <div class="logedIn" v-if="isAuthenticated">
      <a href="#" @click.prevent="onLogout()"><button class="authButton">Logout</button></a>
    </div>
    
    <div class="logedOut" v-if="!isAuthenticated">
       <a href="/login"><button class="authButton">Login</button></a>
       <a href="/signUp"><button class="authButton">Sign Up</button></a>
    </div>
  </header>
</template>

<script>
import { IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from '@/store/storeconstants';
import { mapActions, mapGetters } from 'vuex';

   export default{
      computed:{
        ...mapGetters('auth', {
          isAuthenticated:IS_USER_AUTHENTICATE_GETTER
        })
      },
      methods:{
        ...mapActions('auth',{
            logout:LOGOUT_ACTION   
        }),
        onLogout(){
          this.logout()
        }
      }
   };
</script>

<style scoped>
  .header{
    position: relative;
    top:0;
    left: 0;
    background: rgb(0, 0, 0);
    color: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0.2rem;
    opacity: 1;
    z-index: 100;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 0rem 5rem;
    font-weight:500;
    height: 4rem;
    margin-top: 0.75rem;
  }
  img{
    width:180px;
    height:90px;
    margin-left: 5rem;
  }
  .logedOut{
    display: flex;
    gap: 30px;
    margin-right: 5rem;
    margin-top:1.2%;
  }
  .logedIn{
     margin-right: 5rem;
    margin-top:1.2%;
  }
  .authButton{
    color:#572b9e;
    font-size: 1.1rem;
    overflow: hidden;
    cursor: pointer;
    display: inline-block;
    padding: 0.25em 1em;
    border: currentColor 0.2em solid;
    border-radius: 0.25em;
    background: rgb(27, 6, 39);
    text-shadow: 0 0 0.10025em hsl(0 0% 100%/0.3),0 0 2em currentColor ;
    font-weight: 900;
    box-shadow: inset 0 0 0.5em currentColor, 0 0 0.5em currentColor;
    position: relative;
  }
  .authButton::before{
    content:"";
    position:absolute;
    background: #8e45f5;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em)
  }
  .authButton:hover{
    background:#8e45f5;
    color:#180c2c ;
    text-shadow: none;
  }
  a{
    text-decoration: none;
    color:rgb(133, 76, 207);
  }
  .navPart{
    display: flex;
    margin: 0;
    color: #8e45f5;
    font-size: 1.2rem;
  }
  
</style>