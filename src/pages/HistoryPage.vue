<template>
    <div class="matchesContainer">
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
            <div class="film">
                    <div>
                        <img src="../assets/images/newDesginBackground/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg">                    
                        <p>The Gray Man</p>
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
                        <img src="../assets/images/newDesginBackground/Glow-Season-1-One-Sheet-Poster-Print-22-x-34_db8f4b67-da32-4b2b-b46f-b85c80a585c0.2363af5d231b52395b4ac40af3549ada.webp">
                        <p>Glow</p>
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
                        <img src="../assets/images/newDesginBackground/61ljrN7zmoL._AC_UF894,1000_QL80_.jpg">
                        <p>13 Reasons why</p>
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
        height: 150vh;
        width: 100%;
        padding-left: 60px;
        padding-right: 60px;
        margin: 0;
        display: flex;
        background-image: radial-gradient(
            rgb(119, 27, 180),
            rgb(59, 10, 92),
            rgb(26, 10, 36),
            black
        );
        color: white;
        gap: 30px;
        flex-wrap: wrap;
   }

   .ratings-wrapper{
        display: inline-block;
        padding:0 10px;
   }
   .ratings{
        display: flex;
        flex-direction: row-reverse;
   }
   .ratings span{
    cursor: pointer;
    transition: color .2s transform .2s;
    font-size: 45px;
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
        width: 220px;
        height: 270px;
        border: solid rgb(51, 44, 3);
        padding: 1px;
   }
   p {
        font-size: 25px;
        text-align: center;
        margin: 0;   
    }
   .film{
       margin-top: 30px;
       padding : 5px;
       height: 400px;
       margin: 0;
   }
</style>
