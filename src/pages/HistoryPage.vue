<template>
    <div class="matchesContainer">
        <div v-for="movie in movies" :key="movie.id" class="film">
            <div>
                <img :src="movie.image" :alt="movie.title">
                <p>{{ movie.title }}</p>
            </div>
            <div class="ratings-wrapper">
                <div class="ratings">
                    <span 
                        v-for="rating in [5, 4, 3, 2, 1]" 
                        :key="rating" 
                        :data-rating="rating" 
                        @click="setRating(movie, rating)"
                        :class="{ active: rating <= movie.rating }">
                        &#9733;
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
        };
    },
    mounted() {
        let moviesFromBackend = [
            { id: 'tt0848228', title: "The Avengers", rating: '1' },
            { id: 'tt0241527', title: "Harry Potter and the Sorcerer's Stone", rating: '2' },
            { id: 'tt6264654', title: "Free Guy", rating: '0' },
            { id: 'tt1649418', title: "The Gray Man", rating: '0' },
            { id: 'tt5770786', title: "Glow", rating: '1' },
            { id: 'tt5770786', title: "Glow", rating: '1' },
            { id: 'tt5770786', title: "Glow", rating: '1' },
            { id: 'tt1837492', title: "13 Reasons Why", rating: '4' },
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
    },
    methods: {
        setRating(movie, rating) {
            for (let i = 0; i < this.movies.length; i++) {
                if (this.movies[i] === movie) {
                    this.movies[i].rating = rating;
                }
            }
            //sendit to the backend
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
    flex-wrap: wrap;
}

.ratings-wrapper {
    display: inline-block;
    padding: 0 10px;
}

.ratings {
    display: flex;
    flex-direction: row-reverse;
}

.ratings span {
    cursor: pointer;
    transition: color .2s, transform .2s;
    font-size: 45px;
}

.ratings span:hover,
.ratings span:hover ~ span{
    color: orange;
    transform: scale(1.3);
}
.ratings span.active {
    color: orange;
    transform: scale(1);
}

img {
    width: 220px;
    height: 270px;
    border: solid rgb(51, 44, 3);
    padding: 1px;
}

p {
    font-size: 25px;
    width: 220px;
    text-align: center;
    margin: 0;
}

.film {
    padding: 5px;
    height: 300px;
    margin: 0;
}
</style>
