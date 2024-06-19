<template>
    <h1>Take our quiz and let us recommend the best movies for you</h1>
    <h3>What feeling best describes you right now?</h3>
    <div class="answers">
        <label>
            <input type="radio" name="q1" value="Happy" v-model="selectedEmoji" @change="onSelectionChange">
            Happy
        </label>
        <label>
            <input type="radio" name="q1" value="Sad" v-model="selectedEmoji" @change="onSelectionChange">
            Sad
        </label>
        <label>
            <input type="radio" name="q1" value="Excited" v-model="selectedEmoji" @change="onSelectionChange">
            Excited
        </label>
        <label>
            <input type="radio" name="q1" value="Bored" v-model="selectedEmoji" @change="onSelectionChange">
            Bored
        </label>
    </div>
    <div id="list">
            <ul>
            <li>
                <img src="../assets/images/1131w-0OZ8QXub3I8.webp">
                <p>Gold</p>
            </li>
            <li>
                <img src="../assets/images/black-panther-web.jpg">
                <p>black-panther</p>
            </li>
            <li>
                <img src="../assets/images/ExarQaxUYAEIQpz-691x1024.webp">
                <p>The Sucide Squad</p>
            </li>
            <li>
                <img src="../assets/images/il_fullxfull.4580913585_3yhu.webp">
                <p>Pearl</p>
            </li>
            <li>
                <img src="../assets/images/IMG_1887-scaled.jpeg">
                <p>Avengers</p>
            </li>
            <li>
                <img src="../assets/images/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg">
                <p>After</p>
            </li>
            <li>
                <img src="../assets/images/Oppenheimer.avif">
                <p>Oppenheimer</p>
            </li>
            <li>
                <img src="../assets/images/PP34925_1400x.jpg">
                <p>Harry Potter</p>
            </li>
            <li>
                <img src="../assets/images/s-l1200 (1).jpg">
                <p>Free Guy</p>
            </li>
            <li>
                <img src="../assets/images/s-l1200.jpg">
                <p>Ant man</p>
            </li>
            <li>
                <img src="../assets/images/sub-buzz-6384-1648433205-1.webp">
                <p>Jaws</p>
            </li>
            <li>
                <img src="../assets/images/vd-046-star-wars-official-poster-ep7.jpg">
                <p>Star Wars</p>
            </li>
            <li>
                <img src="../assets/images/1131w-0OZ8QXub3I8.webp">
                <p>Gold</p>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            selectedEmoji: ''
        };
    },
    methods: {
        onSelectionChange() {
            console.log('Selected emoji:', this.selectedEmoji);
            document.getElementById("list").classList.add("selected")
        }
    }
};
</script>

<style scoped>
h3 {
    margin: 70px 20px 30px 10px;
}
.answers {
    margin-left: 20px;
    display: flex;
    gap: 50px;
}
li{
  margin: 20px;
}
img{
    width:300px;
    height: 300px;
}
p{
    font-size: 25px;
}
.selected{
    display: block !important;
}
ul{
    display: flex;
    flex-wrap: wrap;
}
#list{
    display: none;
}
</style>
