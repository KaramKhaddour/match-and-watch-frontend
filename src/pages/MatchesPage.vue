<template>
    <div class="matchesContainer">
        <div class="leftSide">
            <div class="film first-film">
                <div>
                    <img src="../assets/images/s-l1200.jpg">
                    <p>Ant man</p>
                </div>
                <p class="description">
                    Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.
                </p>
             </div>
             <div class="film second-film">
                <p class="description">
                    The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.                </p>
                <div>
                    <img src="../assets/images/IMG_1887-scaled.jpeg">
                    <p>Avengers</p>
                </div>
             </div>
             <div class="film third-film">
                <div>
                    <img src="../assets/images/vd-046-star-wars-official-poster-ep7.jpg">
                    <p>Star wars</p>
                </div>
                <p class="description">
                    A LONG TIME ago, in a small town far, far away, a young man named George Lucas had an idea for a story:

A simple young farmboy gets a magic sword from an old wizard so he can defeat an evil knight, rescue a princess, and save the world.                </p>
             </div>
        </div>
        <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
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
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
   }

   .leftSide {
        height: 100%;
        width: 50%;
        display: block;
   }

   .rightSide {
        background: black;
        height: 100rem;
        width: 50%;
   }

   .matchWatchExpanded {
        width: 550px;
        margin-top: 320px;
        margin-left: 260px;
   }

   img {
        width: 350px;
        height: 350px;
   }

   p {
        font-size: 25px;
        margin-left: 150px;
   }

   .film {
        display: flex;
        padding: 10px
   }

   .description {
        margin: 50px;
   }

   .second-film {
        margin-right: 40px
   }

</style>
