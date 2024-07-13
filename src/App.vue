<template>
  <div class="firstContainer"> 
    <NavBar/>
         <div>
           <router-view>

           </router-view>
         </div>
  </div>
</template>

<script>
import NavBar from './components/NavBarComponent.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
