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
import store from '@/store/store';
import { GET_USER_TOKEN_GETTER } from '@/store/storeconstants';

export default {
  name: 'App',
  props: ['req', 'sessionCode'],
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    let moviesFromBackend = [];
    if (this.req!==null) {
      try {
        let url="http://0.0.0.0:8000/api/movies?query_string="
        url+=this.noSpace
        //console.log(this.noSpace)
        let response = await axios.post(url);
         //console.log(response)
        //moviesFromBackend=response.data
        //console.log(moviesFromBackend)
      }
      catch (err) {
        console.log(err)
      }
    }
    else{
       try{
        let url="http://0.0.0.0:8000/close?session_code="
        let thistoken = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
        url+=this.sessionCode;
        url+="&token=";
        url+=thistoken;
        console.log(url)
        let response = await axios.post(url);
       }
       catch(err){
         console.log(err)
       }
    }
    moviesFromBackend = [
      {
        id: 'tt0111161',
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      },
      {
        id: 'tt0068646',
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      },
      {
        id: 'tt0071562',
        title: 'The Godfather: Part II',
        description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate.',
      }
    ];
    let promises = moviesFromBackend.map(movie => {
            let url = 'https://img.omdbapi.com/?apikey=ee3c8d4a&i=' + movie.id;
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.url; 
                })
                .then(imageUrl => {
                    movie.image = imageUrl; 
                    return movie;
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    movie.image = require('@/assets/images/placeholder.jpg'); 
                    return movie;
                });
        });

        Promise.all(promises).then(updatedMovies => {
            this.movies = updatedMovies;
        });
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
  background: url('../assets/images/blur.png');
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
  background: url('../assets/images/films_container.png');
  z-index: 0;
}
</style>
