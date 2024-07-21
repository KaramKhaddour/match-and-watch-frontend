<template>
    <div id="app" class="podium-container">
      <h1 class="match-title Raleway">Matched</h1>
      <div class="card-container Raleway">
        <div v-for="(movie, index) in movies" :key="movie.id" :class="['card', index === 1 ? 'large' : 'small']">
          <div class="image-container">
            <img :src="movie.image" :alt="movie.title" />
            <div class="overlay">
              <a :href="`https://www.imdb.com/title/${movie.id}/`" target="_blank" class="watch-button Raleway">Watch</a>
            </div>
          </div>
          <div class="ranking Inter">{{ index + 1 }}</div>
          <div class="movie-details">
            <h2 class="movie-title">{{ movie.title }}</h2>
            <p class="movie-description">{{ movie.description }}</p>
            <p class="movie-rating" v-if="movie.rating">Rating: {{ movie.rating }}</p>
          </div>
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
    props: ['noSpace', 'sessionCode'],
    data() {
      return {
        movies: [],
      };
    },
    async mounted() {
      let moviesFromBackend = [];
      if (this.noSpace) {
        try {
          let url="http://0.0.0.0:8000/api/movies?query_string="
          url+=this.noSpace
          console.log(this.noSpace)
          let response = await axios.post(url);
        //  console.log(response)
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
          rating: '9.3'
        },
        {
          id: 'tt0068646',
          title: 'The Godfather',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          rating: '9.2'
        },
        {
          id: 'tt0071562',
          title: 'The Godfather: Part II',
          description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate.',
          rating: '9.0'
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
    font-weight: 700;
    z-index: 1;
    color: white;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .podium-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 100px);
    background-color: black;
  }
  
  .card-container {
    display: flex;
    align-items: flex-start;
    z-index: 1;
  }
  
  .card {
    position: relative;
    width: 300px;
    margin: 0 10px;
    /* background: rgb(140, 69, 255, 0.1); */
    background: linear-gradient(180deg, rgb(1, 0, 2, 1) 0%, rgb(1, 0, 2, 0.2) 50%, rgb(140, 69, 255, 0.1) 85%, rgb(140, 69, 255, 0.6) 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-content: center;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -1px;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 40%);
    transition: all 0.3s ease-in-out;
  }

  .card:hover{
    box-shadow: inset 0px 0px 6px 1px rgb(255, 255, 255);
    outline: 1px solid rgba(255, 255, 255, 0.8);
  }

  /* .optionDes{
    width: 80%;
    height: 50px;
    margin: 10px;
    align-content: center;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -1px;
    border-radius: 30px;
    background: 3D3D3D;
    color: white;
    text-align: center;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 40%);
    transition: all 0.3s ease-in-out;
  }

  .optionDes:hover{
    box-shadow: inset 0px 0px 6px 1px rgb(255, 255, 255);
    outline: 1px solid rgba(255, 255, 255, 0.5);
  } */

  
  .card img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .card .ranking {
    position: absolute;
    top: 10px;
    right: 10px;
    /* background: rgb(140, 69, 255, 0.7); */
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 3px 12px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
    /* box-shadow: inset 0px 0px 6px 1px rgba(00, 0, 0, 40%); */
    font-size: 16px;
  }
  
  .card.large {
    width: 280px;
    transform: translateY(-20px);
  }
  
  .card.small {
    width: 230px;
  }
  
  .image-container {
    position: relative;
  }
  
  .image-container .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container:hover img {
    transform: scale(1.1);
    filter: blur(2px) brightness(0.7);
  }
  
  .image-container:hover .overlay {
    opacity: 1;
  }
  
  .watch-button {
    background: rgb(140, 69, 255);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }
  
  .watch-button:hover {
    background: rgb(140, 69, 255, 0.8);
  }
  
  .movie-details {
    padding: 10px;
    color: white;
  }
  
  .movie-title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .movie-description {
    font-size: 14px;

    margin: 10px 0;
  }
  
  .movie-rating {
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
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
  