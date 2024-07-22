<template>
  <div class="firstContainer"> 
    <NavBar/>
         <div>
          <LoadingSpinner />
           <router-view>

           </router-view>
         </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBarComponent.vue';
import Footer from './components/FooterComponent.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

import { AUTO_LOGIN_ACTION } from './store/storeconstants';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    LoadingSpinner
  },
  created(){
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.firstContainer{
  background: black;
}
</style>
