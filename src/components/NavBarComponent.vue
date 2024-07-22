<template>
  <header class="header">
    <a href="/" class="logo">
       <img  src="../assets/images/mw_logo.svg" alt="logo">
    </a>
    <nav class="navbar">
       <div class="navPart">
          <a href="/quizMode" class="nav-btn">
              <span>
                <img src="@/assets/images/navbar/movie.svg" alt="match-plus">
              </span>
              <span class="nav-btn-txt">Match</span>
          </a>
       </div>
       <div class="navPart">
          <a href="/history" class="nav-btn">
                <span>
                  <img src="@/assets/images/navbar/check.svg" alt="match-plus">
                </span>
                <span class="nav-btn-txt">History</span>
          </a>
       </div>
       <div class="navPart">
        <a href="/movies" class="nav-btn">
              <span>
                <img src="@/assets/images/navbar/plus.svg" alt="match-plus">
              </span>
              <span class="nav-btn-txt">Join Session</span>
          </a>
      </div>
      <div class="navPart">
        <a href="/series" class="nav-btn">
              <span>
                <img src="@/assets/images/navbar/play.svg" alt="match-plus">
              </span>
              <span class="nav-btn-txt">About Us</span>
        </a>
      </div>
    </nav>
 
    <div class="logedOut" v-if="isAuthenticated">
      <RouterLink to="/" @click.prevent="onLogout()" class="register-btn button">Logout</RouterLink>
    </div>
    <div v-else class="logedOut">
      <RouterLink to="/login_new" class="register-btn button Raleway">Login</RouterLink>
      <RouterLink to="/signup_new" class="register-btn button Raleway">SignUp</RouterLink>
    </div>
  </header>
</template>
 
<script>
    import { IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from '@/store/storeconstants';
    import { RouterLink } from 'vue-router';
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
    position: sticky;
    top: 0;
    left:0;
    width: 100%;
    padding: 20px 200px;
    background:rgb(0, 0, 0);
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:100;
    height: 100px;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    border: solid rgb(255, 255, 255, 0.2);
    padding: 15px 40px;
    border-radius: 50px;
    border-width: thin;
    font-weight:100;
    /* margin-left: 150px; */
  }
  .nav-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
 
 .logo > img {
  /* margin-left: 3rem; */
 }
/*   
  img{
    width:170px;
    height:90px;
    margin-left: 120px;
  } */
  .logedOut{
    display: flex;
    gap: 10px;
    /* margin-right: 100px; */
  }
  .authButton{
    padding:3px 30px;
    border: none;
    border-radius: 20px;
    color:white;
    background-image: radial-gradient(
      rgb(37, 7, 56) 70%,  
      rgb(95, 16, 148)
   );
  }
  a{
    text-decoration: none;
    color: white;
  }
  .navPart{
    display: flex;
    margin: 0;
  }
  .navPart > a {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
    font-weight: 400 ; /* normal weight */
    font-style: normal;
    opacity: 60%;
    transition: all 0.3s ease-in-out;
  }
  
  .navPart >  a:hover{
    opacity: 100%;
    text-decoration: underline;
  }

  
 
  /* .gg-play-button-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 20px;
    margin-right: 5px;
    margin-top: 1px;
}
.gg-play-button-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 4px;
    left: 7px
}.gg-check-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 1px solid;
    margin-right: 5px;
    margin-top: 1px;
    border-radius: 100px
}
.gg-check-o::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-color: currentColor;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg)
} */
 
 
.button{
    cursor: poRaleway;
    margin-bottom: 15px;
    padding: 10px 30px;
    border: none;
    border-radius: 60px;
 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
 
    line-height: 20px;
    letter-spacing: 0.5px;
}
 
 
 
.login-btn, .register-btn{
    background: rgba(140, 69, 255, 0.4);
    color: white;
    border: 2px transparent solid;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    padding: 4px 20px;
    margin: 0;
    transition: all 0.3s ease-in-out;
    /* box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 25%); */
}
 
.login-btn:hover, .register-btn:hover{
    background-color: transparent;
    color: #FFFFFF;
    border: 2px #FFFFFF solid;
}
 
 
</style>