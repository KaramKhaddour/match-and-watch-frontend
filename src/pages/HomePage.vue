<template>
    <div class="homeContainer">
        <h1>Let's find the best shows for you</h1>
        <h3>Click this Button, Answer our Questions, and Watch your Show</h3>
         <button  class="matchandwatchbutton" v-on:click="goToQuiz">Match & Watch</button>
        <div class="imagesContainer">
            <img v-for="image in images" :src="image" :key="image">
        </div>
        <h3>
            You can find movies and series from a big variety of platfrmos
        </h3>
        <div class="logosConainter">
           <img src="../assets/images/logos/20th_Century_Studios_(2020).svg" alt="" class="logo">
           <img src="../assets/images/logos/7669d875c8abed5b52b32a4b4369fa04.jpg" alt="" class="logo">
           <img src="../assets/images/logos/A24_logo.svg" alt="" class="logo">
           <img src="../assets/images/logos/maxresdefault.jpg" alt="" class="logo">
           <img src="../assets/images/logos/Paramount_Pictures_2022_(Blue).svg" alt="" class="logo">
           <img src="../assets/images/logos/Sony_pictures_logo.png" alt="" class="logo">
           <img src="../assets/images/logos/Universal_Pictures_logo.svg" alt="" class="logo">
           <img src="../assets/images/logos/Warner_Bros._logo_2023.svg" alt="" class="logo">
        </div>
        <div class="discover">
            <h1 class="explore">
                Explore our wide variety of categories
            </h1>
            <p class="exploreParagraph">
                Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
            </p>
        </div>
        <div class="categories">
            <div class="category">
                <img src="../assets/images/newDesginBackground/large-m0156-thor-love-and-thunder-poster-12-x-18-inch-300-gsm-original-imagfzkdahxdsg3h.webp" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/unnamed (1).jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/71M8YFEakfL._AC_UF894,1000_QL80_.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/4-4127_avengers_endgame_movie_poster_web.jpg" class="cataegoryImage">
                <p class="categoryName">Action</p>
            </div>
            <div class="category">
                <img src="../assets/images/newDesginBackground/61ljrN7zmoL._AC_UF894,1000_QL80_.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" class="cataegoryImage">
                <p class="categoryName">Comedy</p>
            </div>
            <div class="category">
                <img src="../assets/images/newDesginBackground/large-m0156-thor-love-and-thunder-poster-12-x-18-inch-300-gsm-original-imagfzkdahxdsg3h.webp" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/s-l1600.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/Money_Heist_Korea_Denver_Poster_EN.webp" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/unnamed (1).jpg" class="cataegoryImage">
                <p class="categoryName">Drama</p>
            </div>
            <div class="category">
                <img src="../assets/images/newDesginBackground/s-l1600.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/xciwhezc8y9y.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/unnamed.jpg" class="cataegoryImage">
                <img src="../assets/images/newDesginBackground/large-m0156-thor-love-and-thunder-poster-12-x-18-inch-300-gsm-original-imagfzkdahxdsg3h.webp" class="cataegoryImage">
                <p class="categoryName">Horror</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                require('@/assets/images/newDesginBackground/$_57.jpeg'),
                require('@/assets/images/newDesginBackground/3ba32041615387.57acc4bf0b15f.jpg'),
                require('@/assets/images/newDesginBackground/4-4127_avengers_endgame_movie_poster_web.jpg'),
                require('@/assets/images/newDesginBackground/61ljrN7zmoL._AC_UF894,1000_QL80_.jpg'),
                require('@/assets/images/newDesginBackground/71M8YFEakfL._AC_UF894,1000_QL80_.jpg'),
                require('@/assets/images/newDesginBackground/81U0-cRG34S._AC_UF894,1000_QL80_.jpg'),
                require('@/assets/images/newDesginBackground/DE_1899S1_Main_Vertical_27x40_RGB_PRE.jpg'),
                require('@/assets/images/newDesginBackground/Eyizh9ZU4AMPelM.avif'),
                require('@/assets/images/newDesginBackground/Glow-Season-1-One-Sheet-Poster-Print-22-x-34_db8f4b67-da32-4b2b-b46f-b85c80a585c0.2363af5d231b52395b4ac40af3549ada.webp'),
                require('@/assets/images/newDesginBackground/harry-potter-and-the-deadly-hallows-i133035.jpg'),
                require('@/assets/images/newDesginBackground/i8szyqqin2o71.webp'),
                require('@/assets/images/newDesginBackground/large-m0156-thor-love-and-thunder-poster-12-x-18-inch-300-gsm-original-imagfzkdahxdsg3h.webp'),
                require('@/assets/images/newDesginBackground/Money_Heist_Korea_Denver_Poster_EN.webp'),
                require('@/assets/images/newDesginBackground/MV5BMDBiZmI1OGItNTNhOS00NTc4LTk4MzItNWFjYjEzODFkYjg3XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg'),
                require('@/assets/images/newDesginBackground/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg'),
                require('@/assets/images/newDesginBackground/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'),
                require('@/assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'),
                require('@/assets/images/newDesginBackground/s-l1600.jpg'),
                require('@/assets/images/newDesginBackground/xciwhezc8y9y.jpg'),
                require('@/assets/images/newDesginBackground/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg'),
                require('@/assets/images/newDesginBackground/unnamed.jpg'),
                require('@/assets/images/newDesginBackground/unnamed (1).jpg'),
                require('@/assets/images/newDesginBackground/s-l1600.jpg'),
                require('@/assets/images/newDesginBackground/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg'),
                require('@/assets/images/newDesginBackground/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'),
                require('@/assets/images/newDesginBackground/s-l1600.jpg'),
                require('@/assets/images/newDesginBackground/i8szyqqin2o71.webp'),
                require('@/assets/images/newDesginBackground/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'),
                require('@/assets/images/newDesginBackground/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_.jpg'),
                require('@/assets/images/newDesginBackground/s-l1600.jpg')
            ]
        };
    },
    computed: {
        token() {
            return this.$store.state.auth.token;
        }
    },
    methods: {
    goToQuiz() {
        this.$router.push('/quizMode')
    }
}

};
</script>



<style scoped>
.homeContainer{
   width: 100%;
   height: 100%;
   background-image: radial-gradient(#3f1f72,#4f298b, black);

}
h1{
    font-family: "Indie Flower", cursive;
    font-weight: 900;
    font-style: normal;
    color: white;
    font-size: 3em;
    text-align: center;
    padding-top: 1em;
}
h3{
    font-family: "Indie Flower", cursive;;
    font-weight: 900;
    font-style: normal;
    color: white;
    text-align: center;
}
.matchandwatchbutton{
    text-align: center;
    margin: auto;
    display: grid;
    top: 29%;
    left: 45%;
    width: 200px;
    height: 60px;
    text-decoration: none;
    font-size: 20px;
    padding-top:0.6em;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #2b0268;
    font-weight: 600;
    background-size: 400%;
    background-image: linear-gradient(90deg,#b185f8, #7a52bb,#b185f8);
}
.matchandwatchbutton:before{
    content: '';
    position: absolute;
    background: inherit;
    top: -5px;
    right: -5px;
    left: -5px;
    width: 200px;
    height: 60px;
    bottom: -5px;
    background: #8e45f5;
    border-radius: 50px;
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.5s
}
.matchandwatchbutton:before{
    opacity: 1;
    z-index: -1;
}
.matchandwatchbutton{
    z-index: 1;
    animation: glow 20s linear infinite;
}
@keyframes glow{
    0%{
        background-position: 0%;
    }
    50%{
        background-position: 400%;
    }
    100%{
        background-position:0%;
    }
    
}
button{
    background: white;
    color:black;        
    height: 30px;
    border-radius: 20px;
}
img{
    height: 200px;
    width: 150px;
    margin: 10px;
    border-radius: 20px;
}
.imagesContainer{
    opacity: 0.7;
    margin-left: 100px;
    margin-right: 30px;
   margin-bottom: 100px;
}
.logosConainter{
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 200px;
}
.logo{
    border: solid;
    border-color: white;
    width: 330px;
    height: 200px;
    padding: 20px;
   
}
p{
    color: white;
    width: 800px;
    margin-left: 280px;
    font-weight: 100;
}
.explore{
    margin-left: -330px;
}
.category{
    display: flex;
    width: 250px;
    height: 350px;
    flex-wrap: wrap;
    border: solid white 1px;
    margin-right: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
}
.cataegoryImage{
    height: 120px;
    width: 100px;
    margin:10px;
    border-radius: 0;
}
.categories{
    display: flex;
    padding-left: 270px;
}
.categoryName{
    margin-left: 50px;
}
a{
    text-decoration: none;
    width: 100px;
}
</style>