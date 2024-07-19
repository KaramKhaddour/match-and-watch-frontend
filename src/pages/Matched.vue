<template>
    <div id="app" class="podium-container">
    <h1 class="match-title zcool">Matched</h1>
      <div class="card-container Raleway">
        <div class="card small">
          <img src="@/assets/images/black-panther-web.jpg" alt="Movie Poster" />
          <div class="ranking">2</div>
        </div>
        <div class="card large">
          <img src="@/assets/images/black-panther-web.jpg" alt="Movie Poster" />
          <div class="ranking">1</div>
        </div>
        <div class="card small">
          <img src="@/assets/images/black-panther-web.jpg" alt="Movie Poster" />
          <div class="ranking">3</div>
        </div>
      </div>
      <div class="blur-circle"></div>
        <div class="blur-circle"></div>
        <div class="films-container"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        movies: [
          { poster: '@/assets/images/black-panther-web.jpg', title: 'Top Movie 1' },
          { poster: 'path/to/top-movie-2.jpg', title: 'Top Movie 2' },
          { poster: 'path/to/top-movie-3.jpg', title: 'Top Movie 3' },
        ]
      }
    }
  }
  </script>
  
  <style>

.match-title{
    font-size: 36px;
    font-weight: 500;
    z-index: 1;
    color: white;
    margin-bottom: 50px;
}
  .podium-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: black;
  }
  
  .card-container {
    display: flex;
    align-items: flex-end;
    z-index: 1;
  }
  
  .card {
    position: relative;
    width: 200px;
    margin: 0 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }
  
  .card img {
    width: 100%;
    height: auto;
  }
  
  .card .ranking {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(140, 69, 255, 1);
    color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 16px;
  }
  
  .card.large {
    width: 300px;
    transform: translateY(-20px);
  }
  
  .card.small {
    width: 200px;
  }

  .blur-circle{
    display: inline-block;
    position: absolute;
    overflow:auto;
    height: 900px;
    width: 900px;
    transform: scale(0.9);
    opacity: 0.7;
    background-position-x: center;
    background-position-y: center;
    top: -15vh;
    left: 15vw;
    background: url(../assets/images/blur.png);
    z-index: 0;
}

.films-container{
    display: inline-block;
    position: absolute;
    overflow:auto;
    height: 729px;
    width: 1200px;
    transform: scale(0.9);
    opacity: 0.3;
    background-position-x: center;
    background-position-y: center;
    top: 10vh;
    background: url(../assets/images/films_container.png);
    z-index: 0;
}
  </style>
  