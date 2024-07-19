<template>
  <div id="app" class="podium-container">
    <h1 class="match-title zcool">Matched</h1>
    <div class="card-container Raleway">
      <div v-for="(movie, index) in movies" :key="movie.id" :class="['card', index === 1 ? 'large' : 'small']">
        <img :src="movie.image" :alt="movie.title" />
        <div class="ranking">{{ index + 1 }}</div>
      </div>
    </div>
    <div class="blur-circle"></div>
    <div class="blur-circle"></div>
    <div class="films-container"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    let moviesFromBackend = null;
    moviesFromBackend = [
      { id: 'tt0241527', title: "Harry Potter and the Sorcerer's Stone", description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.', rating: '7.6' },
      { id: 'tt0241527', title: "Harry Potter and the Sorcerer's Stone", description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.', rating: '7.6' },
      { id: 'tt0241527', title: "Harry Potter and the Sorcerer's Stone", description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.', rating: '7.6' },
    ];
    for (let i = 0; i < moviesFromBackend.length; i++) {
      let s = 'https://img.omdbapi.com/?apikey=ee3c8d4a&i=' + moviesFromBackend[i].id;
      moviesFromBackend[i]['image'] = s;
    }
    this.movies = moviesFromBackend;
  }
};
</script>

<style scoped>
.match-title {
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

.blur-circle {
  display: inline-block;
  position: absolute;
  overflow: auto;
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

.films-container {
  display: inline-block;
  position: absolute;
  overflow: auto;
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
