<template>
    <div class="matchesContainer">
       <div></div>
       <div class="movie">
          <img src="../assets/images/newDesginBackground/81U0-cRG34S._AC_UF894,1000_QL80_.jpg" alt="">
          <div class="nameRating">
               <h3>Stranger Things</h3>
               <p class="rating">4/5 Rating</p>
          </div>
          <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
       </div>
       <div class="movie">
          <img src="../assets/images/newDesginBackground/3ba32041615387.57acc4bf0b15f.jpg" alt="">
          <div class="nameRating">
               <h3>Moonlight</h3>
               <p class="rating">4/5 Rating</p>
          </div>
          <p>A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.</p>
       </div>
       <div class="movie">
          <img src="../assets/images/newDesginBackground/harry-potter-and-the-deadly-hallows-i133035.jpg" alt="">
          <div class="nameRating">
               <h3>Harry Potter</h3>
               <p class="rating">4/5 Rating</p>
          </div>
          <p>An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</p>
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
   
   html, body {
        height: 100%;
        margin: 0;
        padding: 0;
   }
   .matchesContainer {
        height: 150vh;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        padding: 60px;
        background-image: radial-gradient(#3e1d72,black);
        color: white;
        
   }
   .movie{
     width: 500px;
     border: solid rgb(51, 44, 3);
     border-radius: 20px;
     margin: 20px;
     padding: 20px;
     height: 700px;
     background-image: linear-gradient(#5b2da5,black);
   }
   img{
     width: 400px;
     height: 400px;
     margin-left: 25px;
     border-radius: 20px;
   }
   .nameRating{
     margin-top: 20px;
     display: flex;
   }
   .rating{
     margin-left: 130px;
   }

</style>
