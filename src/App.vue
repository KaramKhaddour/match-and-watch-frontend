<template>
  <NavBar/>
   <div class="container">
     <div class="row">
      <div class="col-md-12">
         <div>
           <router-view>

           </router-view>
         </div>
      </div>
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
