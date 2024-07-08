<template>
    <div class="matchesContainer">
        <div class="leftSide">
            <div class="film">
                <div>
                    <img src="../assets/images/IMG_1887-scaled.jpeg">
                    <p>Avengers</p>
                </div>
                <div class="ratings-wrapper">
                    <div class="ratings">
                        <span data-rating="5">&#9733;</span>
                        <span data-rating="4">&#9733;</span>
                        <span data-rating="3">&#9733;</span>
                        <span data-rating="2">&#9733;</span>
                        <span data-rating="1">&#9733;</span>
                    </div>
                </div>
            </div>
            <div class="film">
                <div>
                    <img src="../assets/images/PP34925_1400x.jpg">
                    <p>Harry Potter</p>
                </div>
                <div class="ratings-wrapper">
                    <div class="ratings">
                        <span data-rating="5">&#9733;</span>
                        <span data-rating="4">&#9733;</span>
                        <span data-rating="3">&#9733;</span>
                        <span data-rating="2">&#9733;</span>
                        <span data-rating="1">&#9733;</span>
                    </div>
                </div>
            </div>
            <div class="film">
                <div>
                    <img src="../assets/images/s-l1200 (1).jpg">
                    <p>Free Guy</p>
                </div>
                <div class="ratings-wrapper">
                    <div class="ratings">
                        <span data-rating="5">&#9733;</span>
                        <span data-rating="4">&#9733;</span>
                        <span data-rating="3">&#9733;</span>
                        <span data-rating="2">&#9733;</span>
                        <span data-rating="1">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        const stars=document.querySelectorAll(".ratings span");
        for(let star of stars){
            star.addEventListener("click", function(){
                this.setAttribute("data-clicked", "true")
            })
        }
    }
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
   .ratings-wrapper{
        display: inline-block;
        margin-bottom: 20px;
        padding:0 10px;
        margin-left: 50px;
        padding-top:150px
   }
   .ratings{
        display: flex;
        flex-direction: row-reverse;
   }
   .ratings span{
    cursor: pointer;
    transition: color .2s transform .2s;
    font-size: 50px;
   }
   .ratings span:hover{
      color:orange;
      transform: scale(1.3);
   }
   .ratings span:hover ~span{
    color: orange;
   }
   .ratings span[data-clicked]{
    color: orange;
   }
   .ratings span[data-clicked] ~span{
    color: orange;
   }
   img {
        width: 400px;
        height: 400px;
   }
   p {
        font-size: 25px;
        margin-left: 150px;
   }
   .film{
       display: flex;
       padding : 20px;
   }
</style>
