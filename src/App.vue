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

</style>
